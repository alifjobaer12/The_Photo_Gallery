import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { HiHome } from "react-icons/hi";
import { BiArrowBack } from "react-icons/bi";
import { motion } from "framer-motion";

const NotFound = () => {
	const [stars, setStars] = useState([]);
	const initializedRef = useRef(false);

	useEffect(() => {
		if (!initializedRef.current) {
			setStars(
				[...Array(60)].map(() => ({
					top: `${Math.random() * 100}%`,
					left: `${Math.random() * 100}%`,
					size: Math.random() * 3 + 1,
					duration: `${3 + Math.random() * 5}s`,
					delay: `${Math.random() * 3}s`,
				})),
			);

			initializedRef.current = true;
		}
	}, []);

	return (
		<div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#050816] px-4 py-6 text-white sm:px-6 sm:py-8">
			{/* GRID BACKGROUND */}
			<div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-size-[70px_70px]" />

			{/* GLOW ORBS */}
			<div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-100/40 blur-3xl sm:h-96 sm:w-96 lg:h-125 lg:w-125" />

			<div className="absolute left-4 top-6 h-48 w-48 animate-pulse rounded-full bg-red-100/30 blur-3xl sm:left-10 sm:top-10 sm:h-72 sm:w-72" />

			<div className="absolute -bottom-6 -right-6 h-56 w-56 animate-pulse rounded-full bg-red-100/20 blur-3xl sm:bottom-0 sm:right-0 sm:h-80 sm:w-80" />

			{/* STARS */}
			<div className="absolute inset-0 overflow-hidden">
				{stars.map((star, i) => (
					<span
						key={i}
						className="absolute rounded-full bg-red-400/60"
						style={{
							top: star.top,
							left: star.left,
							width: `${star.size}px`,
							height: `${star.size}px`,
							animation: `pulse ${star.duration} infinite`,
							animationDelay: star.delay,
						}}
					/>
				))}
			</div>

			{/* MAIN CARD */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8 }}
				className="relative z-10 flex w-full max-w-3xl flex-col items-center justify-center overflow-hidden rounded-3xl border border-red-200 bg-[#333333] p-5 text-center shadow-lg backdrop-blur-xl sm:rounded-[40px] sm:p-8 md:p-10 lg:p-14"
			>
				{/* TOP LABEL */}
				<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-300 bg-red-50 px-4 py-2 text-sm font-medium text-red-600">
					<div className="h-2 w-2 animate-pulse rounded-full bg-red-600" />
					Error 404
				</div>

				{/* HUGE TEXT */}
				<h1 className="bg-linear-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-7xl font-black leading-none text-transparent sm:text-8xl md:text-[110px] lg:text-[160px]">
					404
				</h1>

				{/* TITLE */}
				<h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
					Lost in Space
				</h2>

				{/* DESC */}
				<p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-500 sm:mt-5 sm:text-base md:text-lg">
					The page you’re trying to access doesn’t exist, was moved,
					or never existed in the first place.
				</p>

				{/* BUTTONS */}
				<div className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:gap-4">
					<Link
						to="/"
						className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-red-600 px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-red-700 sm:w-auto sm:px-7 sm:py-4"
					>
						<HiHome className="text-xl" />

						<span>Back To Home</span>
					</Link>

					<button
						onClick={() => window.history.back()}
						className="group flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-red-600 bg-white px-6 py-3.5 font-semibold text-red-600 transition-all duration-300 hover:scale-105 hover:bg-red-50 sm:w-auto sm:px-7 sm:py-4"
					>
						<BiArrowBack className="text-xl transition-transform duration-300 group-hover:-translate-x-1" />

						<span>Go Back</span>
					</button>
				</div>

				{/* SMALL FOOTER */}
				<div className="mt-12 border-t border-neutral-200 pt-6 text-sm text-neutral-500">
					Error Code: NF-404 • Route not found
				</div>
			</motion.div>

			{/* SIDE TEXT */}
			<div className="pointer-events-none absolute left-10 top-1/2 hidden -translate-y-1/2 rotate-90 text-sm uppercase tracking-[10px] text-neutral-300 lg:block">
				Page Missing
			</div>

			<div className="pointer-events-none absolute bottom-6 right-6 hidden text-6xl font-black text-neutral-200 md:bottom-10 md:right-10 md:text-8xl">
				404
			</div>
		</div>
	);
};

export default NotFound;
