import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { API_CONFIG } from "../../constants/appConstants";

// Helper to generate low-res and high-res image URLs from Unsplash-style API
const getImageUrls = (imageData) => {
	const { id, download_url } = imageData;
	// Low-res: tiny blurred version (for blur-up effect)
	const lowResUrl = `${download_url}?w=50&q=20`;
	// High-res: full resolution
	const highResUrl = `${download_url}?w=800&q=80`;
	return { lowResUrl, highResUrl, id };
};

const ImageSection = () => {
	const [images, setImages] = useState([]);
	const [pageNumber, setPageNumber] = useState(
		() => Math.floor(Math.random() * API_CONFIG.MAX_PAGES) + 1,
	);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [loadedImages, setLoadedImages] = useState(new Set());
	const [highResLoaded, setHighResLoaded] = useState(new Set());
	const sentinelRef = useRef(null);
	const imageRefsMap = useRef(new Map());

	// load when pageNumber changes (inline fetch to avoid sync setState in effect body)
	useEffect(() => {
		let cancelled = false;

		const fetchPage = async () => {
			setLoading(true);
			setError(null);
			try {
				const response = await axios.get(
					`${API_CONFIG.BASE_URL}/list?page=${pageNumber}&limit=${API_CONFIG.IMAGES_PER_PAGE}`,
				);
				if (!cancelled) {
					setImages((prev) => [...prev, ...response.data]);
					// Reset high-res loaded set for new images to trigger lazy load
					setHighResLoaded((prev) => new Set(prev));
				}
			} catch (err) {
				console.error("Error fetching data:", err);
				if (!cancelled) setError(err);
			} finally {
				if (!cancelled) setLoading(false);
			}
		};

		fetchPage();

		return () => {
			cancelled = true;
		};
	}, [pageNumber]);

	// Intersection Observer for lazy loading high-res images
	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const imageId = entry.target.dataset.imageId;
						// Trigger high-res loading
						if (imageRefsMap.current.has(imageId)) {
							const img = imageRefsMap.current.get(imageId);
							const highResUrl = img.dataset.highRes;
							const tempImg = new Image();
							tempImg.onload = () => {
								img.src = highResUrl;
								setHighResLoaded(
									(prev) => new Set([...prev, imageId]),
								);
							};
							tempImg.src = highResUrl;
						}
					}
				});
			},
			{
				root: null,
				rootMargin: "100px",
				threshold: 0,
			},
		);

		// Observe all image containers
		document.querySelectorAll("[data-image-id]").forEach((el) => {
			observer.observe(el);
		});

		return () => observer.disconnect();
	}, [images]);

	// infinite scroll observer for pagination
	useEffect(() => {
		if (!sentinelRef.current) return;
		const obs = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !loading) {
						setPageNumber((p) => p + 1);
					}
				});
			},
			{ root: null, rootMargin: "200px", threshold: 0 },
		);

		obs.observe(sentinelRef.current);
		return () => obs.disconnect();
	}, [loading]);

	const handleLowResLoad = (imageId) => {
		setLoadedImages((prev) => new Set([...prev, imageId]));
	};

	return (
		<section className="min-h-screen w-full px-4 pt-4 sm:px-6 sm:pt-7 md:px-6">
			<div className="h-full">
				{images.length > 0 && (
					<div
						style={{
							columnCount: "auto",
							columnWidth: "250px",
							columnGap: "1rem",
						}}
					>
						{images.map((image) => {
							const { lowResUrl, highResUrl, id } =
								getImageUrls(image);
							const isLowResLoaded = loadedImages.has(id);
							const isHighResLoaded = highResLoaded.has(id);

							return (
								<article
									key={id}
									className="overflow-hidden rounded break-inside-avoid mb-4"
									data-image-id={id}
								>
									<a
										href={image.url}
										target="_blank"
										rel="noopener noreferrer"
										className="block relative bg-gray-200 overflow-hidden"
									>
										{/* Low-res blurred placeholder */}
										{!isHighResLoaded && (
											<img
												ref={(el) => {
													if (el)
														imageRefsMap.current.set(
															id,
															el,
														);
												}}
												src={lowResUrl}
												data-high-res={highResUrl}
												alt={image.author}
												className={`w-full h-auto object-cover block transition-opacity duration-500 blur-md ${isLowResLoaded ? "opacity-100" : "opacity-0"}`}
												onLoad={() =>
													handleLowResLoad(id)
												}
											/>
										)}

										{/* High-res image (replaces src after load) */}
										{isHighResLoaded && (
											<img
												src={highResUrl}
												alt={image.author}
												className="w-full h-auto object-cover block transition-opacity duration-300 opacity-100"
											/>
										)}

										{/* Loading spinner */}
										{!isLowResLoaded && (
											<div className="absolute inset-0 flex items-center justify-center bg-gray-200 min-h-48">
												<div className="relative h-8 w-8">
													<div className="absolute inset-0 rounded-full border-3 border-gray-300"></div>
													<div className="absolute inset-0 rounded-full border-3 border-transparent border-t-red-600 animate-spin"></div>
												</div>
											</div>
										)}
									</a>
									<div className="p-2">
										<p className="text-sm text-gray-700">
											{image.author}
										</p>
									</div>
								</article>
							);
						})}
					</div>
				)}

				{error && (
					<p className="mt-4 text-red-600">Failed to load images.</p>
				)}

				<div ref={sentinelRef} className="h-6" />

				{loading && (
					<div className="flex items-center justify-center py-12">
						<div className="relative h-12 w-12">
							<div className="absolute inset-0 rounded-full border-4 border-gray-300"></div>
							<div className="absolute inset-0 rounded-full border-4 border-transparent border-t-red-600 animate-spin"></div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default ImageSection;
