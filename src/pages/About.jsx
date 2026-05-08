const About = () => {
	return (
		<section className="min-h-screen bg-[#efefef] flex flex-col md:ml-80">
			<div className="pt-20 md:pt-12 px-6 md:px-8 flex-1 flex flex-col justify-center">
				<div className="max-w-2xl mx-auto w-full">
					<h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
						About ThePhotoGallery
					</h1>
					<p className="text-lg text-neutral-700 mb-4 leading-relaxed">
						We are a creative studio dedicated to capturing moments
						and transforming them into timeless visual stories. Our
						passion lies in creating compelling photography that
						speaks to the heart.
					</p>
					<p className="text-lg text-neutral-700 mb-6 leading-relaxed">
						With over a decade of experience, we specialize in
						portrait, fashion, and motion photography. Our work
						celebrates the beauty of every subject and tells
						authentic stories through our lens.
					</p>
					<div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10">
						<div className="bg-white p-4 rounded-lg shadow-sm">
							<h3 className="text-2xl font-bold text-red-600">
								500+
							</h3>
							<p className="text-sm text-neutral-600 mt-1">
								Projects Completed
							</p>
						</div>
						<div className="bg-white p-4 rounded-lg shadow-sm">
							<h3 className="text-2xl font-bold text-red-600">
								50+
							</h3>
							<p className="text-sm text-neutral-600 mt-1">
								Clients Worldwide
							</p>
						</div>
						<div className="bg-white p-4 rounded-lg shadow-sm">
							<h3 className="text-2xl font-bold text-red-600">
								10+
							</h3>
							<p className="text-sm text-neutral-600 mt-1">
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
