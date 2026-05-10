const Fashion = () => {
	return (
		<section className="min-h-screen flex flex-col bg-[#efefef] text-neutral-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100 md:ml-80">
			<div className="pt-20 md:pt-12 px-6 md:px-8 flex-1 flex flex-col justify-center">
				<div className="max-w-3xl mx-auto w-full">
					<h1 className="mb-4 text-4xl font-bold text-neutral-900 dark:text-neutral-100 md:text-5xl">
						Fashion Photography
					</h1>
					<p className="mb-8 text-lg text-neutral-600 dark:text-neutral-400">
						Style, elegance, and timeless imagery
					</p>
					<p className="mb-6 leading-relaxed text-neutral-700 dark:text-neutral-300">
						We specialize in fashion photography that captures the
						essence of brands, designers, and individual style. From
						runway moments to editorial shoots, we create stunning
						visuals that tell compelling stories.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
						<div className="rounded-lg border-l-4 border-red-600 bg-white p-6 shadow-sm transition-colors duration-300 dark:bg-neutral-900 dark:shadow-black/20">
							<h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
								Editorial Shoots
							</h3>
							<p className="text-neutral-600 dark:text-neutral-400">
								High-fashion editorial content for magazines and
								digital platforms.
							</p>
						</div>
						<div className="rounded-lg border-l-4 border-red-600 bg-white p-6 shadow-sm transition-colors duration-300 dark:bg-neutral-900 dark:shadow-black/20">
							<h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
								Product Photography
							</h3>
							<p className="text-neutral-600 dark:text-neutral-400">
								Professional product shots for brands and
								e-commerce platforms.
							</p>
						</div>
						<div className="rounded-lg border-l-4 border-red-600 bg-white p-6 shadow-sm transition-colors duration-300 dark:bg-neutral-900 dark:shadow-black/20">
							<h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
								Runway Photography
							</h3>
							<p className="text-neutral-600 dark:text-neutral-400">
								Dynamic and exciting runway shots capturing
								fashion shows and events.
							</p>
						</div>
						<div className="rounded-lg border-l-4 border-red-600 bg-white p-6 shadow-sm transition-colors duration-300 dark:bg-neutral-900 dark:shadow-black/20">
							<h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
								Brand Campaigns
							</h3>
							<p className="text-neutral-600 dark:text-neutral-400">
								Creative campaigns that showcase brand identity
								and fashion vision.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Fashion;
