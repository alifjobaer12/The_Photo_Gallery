const Portraits = () => {
	return (
		<section className="min-h-screen flex flex-col bg-[#efefef] text-neutral-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100 md:ml-80">
			<div className="pt-20 md:pt-12 px-6 md:px-8 flex-1 flex flex-col justify-center">
				<div className="max-w-3xl mx-auto w-full">
					<h1 className="mb-4 text-4xl font-bold text-neutral-900 dark:text-neutral-100 md:text-5xl">
						Portrait Photography
					</h1>
					<p className="mb-8 text-lg text-neutral-600 dark:text-neutral-400">
						Capturing the essence of every individual
					</p>
					<p className="mb-6 leading-relaxed text-neutral-700 dark:text-neutral-300">
						Our portrait photography collection showcases the
						beauty, emotion, and uniqueness of people. From candid
						moments to carefully composed studio shots, we bring out
						the best in every subject.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
						<div className="rounded-lg border-l-4 border-red-600 bg-white p-6 shadow-sm transition-colors duration-300 dark:bg-neutral-900 dark:shadow-black/20">
							<h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
								Professional Headshots
							</h3>
							<p className="text-neutral-600 dark:text-neutral-400">
								High-quality portraits perfect for business
								profiles, LinkedIn, and corporate branding.
							</p>
						</div>
						<div className="rounded-lg border-l-4 border-red-600 bg-white p-6 shadow-sm transition-colors duration-300 dark:bg-neutral-900 dark:shadow-black/20">
							<h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
								Family Sessions
							</h3>
							<p className="text-neutral-600 dark:text-neutral-400">
								Capture precious moments with loved ones in
								natural and studio settings.
							</p>
						</div>
						<div className="rounded-lg border-l-4 border-red-600 bg-white p-6 shadow-sm transition-colors duration-300 dark:bg-neutral-900 dark:shadow-black/20">
							<h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
								Wedding Portraits
							</h3>
							<p className="text-neutral-600 dark:text-neutral-400">
								Elegant and timeless portraits that celebrate
								your special moments.
							</p>
						</div>
						<div className="rounded-lg border-l-4 border-red-600 bg-white p-6 shadow-sm transition-colors duration-300 dark:bg-neutral-900 dark:shadow-black/20">
							<h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
								Creative Concepts
							</h3>
							<p className="text-neutral-600 dark:text-neutral-400">
								Unique and artistic portraits that push creative
								boundaries.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portraits;
