const Motion = () => {
	return (
		<section className="min-h-screen flex flex-col bg-[#efefef] text-neutral-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100 md:ml-80">
			<div className="pt-20 md:pt-12 px-6 md:px-8 flex-1 flex flex-col justify-center">
				<div className="max-w-3xl mx-auto w-full">
					<h1 className="mb-4 text-4xl font-bold text-neutral-900 dark:text-neutral-100 md:text-5xl">
						Motion & Video
					</h1>
					<p className="mb-8 text-lg text-neutral-600 dark:text-neutral-400">
						Bringing stories to life through dynamic video content
					</p>
					<p className="mb-6 leading-relaxed text-neutral-700 dark:text-neutral-300">
						Our motion and video production services combine
						cinematography, storytelling, and technical expertise to
						create compelling visual narratives. From concept to
						final cut, we deliver professional video content.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
						<div className="rounded-lg border-l-4 border-red-600 bg-white p-6 shadow-sm transition-colors duration-300 dark:bg-neutral-900 dark:shadow-black/20">
							<h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
								Corporate Videos
							</h3>
							<p className="text-neutral-600 dark:text-neutral-400">
								Professional videos for corporate communications
								and brand messaging.
							</p>
						</div>
						<div className="rounded-lg border-l-4 border-red-600 bg-white p-6 shadow-sm transition-colors duration-300 dark:bg-neutral-900 dark:shadow-black/20">
							<h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
								Documentaries
							</h3>
							<p className="text-neutral-600 dark:text-neutral-400">
								In-depth documentary work that tells important
								and impactful stories.
							</p>
						</div>
						<div className="rounded-lg border-l-4 border-red-600 bg-white p-6 shadow-sm transition-colors duration-300 dark:bg-neutral-900 dark:shadow-black/20">
							<h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
								Event Coverage
							</h3>
							<p className="text-neutral-600 dark:text-neutral-400">
								Professional videography for weddings,
								conferences, and special events.
							</p>
						</div>
						<div className="rounded-lg border-l-4 border-red-600 bg-white p-6 shadow-sm transition-colors duration-300 dark:bg-neutral-900 dark:shadow-black/20">
							<h3 className="mb-2 text-xl font-semibold text-neutral-900 dark:text-neutral-100">
								Music Videos
							</h3>
							<p className="text-neutral-600 dark:text-neutral-400">
								Creative and artistic music video production
								with cinematic quality.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Motion;
