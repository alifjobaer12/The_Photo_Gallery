const About = () => {
	return (
		<section className="min-h-screen flex flex-col bg-[#efefef] text-neutral-900 transition-colors duration-300 dark:bg-neutral-950 dark:text-neutral-100 md:ml-80">
			<div className="pt-20 md:pt-12 px-6 md:px-8 flex-1 flex flex-col justify-center">
				<div className="max-w-2xl mx-auto w-full">
					<h1 className="mb-6 text-4xl font-bold text-neutral-900 dark:text-neutral-100 md:text-5xl">
						About ThePhotoGallery
					</h1>
					<p className="mb-4 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
						We are a creative studio dedicated to capturing moments
						and transforming them into timeless visual stories. Our
						passion lies in creating compelling photography that
						speaks to the heart.
					</p>
					<p className="mb-6 text-lg leading-relaxed text-neutral-700 dark:text-neutral-300">
						With over a decade of experience, we specialize in
						portrait, fashion, and motion photography. Our work
						celebrates the beauty of every subject and tells
						authentic stories through our lens.
					</p>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
						<div className="rounded-lg bg-white p-4 shadow-sm transition-colors duration-300 dark:bg-neutral-900 dark:shadow-black/20">
							<h3 className="text-2xl font-bold text-red-600">
								500+
							</h3>
							<p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
								Projects Completed
							</p>
						</div>
						<div className="rounded-lg bg-white p-4 shadow-sm transition-colors duration-300 dark:bg-neutral-900 dark:shadow-black/20">
							<h3 className="text-2xl font-bold text-red-600">
								50+
							</h3>
							<p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
								Clients Worldwide
							</p>
						</div>
						<div className="rounded-lg bg-white p-4 shadow-sm transition-colors duration-300 dark:bg-neutral-900 dark:shadow-black/20">
							<h3 className="text-2xl font-bold text-red-600">
								10+
							</h3>
							<p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
								Years Experience
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
