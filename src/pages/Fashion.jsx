const Fashion = () => {
	return (
		<section className="min-h-screen bg-[#efefef] flex flex-col md:ml-80">
			<div className="pt-20 md:pt-12 px-6 md:px-8 flex-1 flex flex-col justify-center">
				<div className="max-w-3xl mx-auto w-full">
					<h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
						Fashion Photography
					</h1>
					<p className="text-neutral-600 mb-8 text-lg">
						Style, elegance, and timeless imagery
					</p>
					<p className="text-neutral-700 mb-6 leading-relaxed">
						We specialize in fashion photography that captures the
						essence of brands, designers, and individual style. From
						runway moments to editorial shoots, we create stunning
						visuals that tell compelling stories.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
						<div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-600">
							<h3 className="text-xl font-semibold text-neutral-900 mb-2">
								Editorial Shoots
							</h3>
							<p className="text-neutral-600">
								High-fashion editorial content for magazines and
								digital platforms.
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-600">
							<h3 className="text-xl font-semibold text-neutral-900 mb-2">
								Product Photography
							</h3>
							<p className="text-neutral-600">
								Professional product shots for brands and
								e-commerce platforms.
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-600">
							<h3 className="text-xl font-semibold text-neutral-900 mb-2">
								Runway Photography
							</h3>
							<p className="text-neutral-600">
								Dynamic and exciting runway shots capturing
								fashion shows and events.
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-600">
							<h3 className="text-xl font-semibold text-neutral-900 mb-2">
								Brand Campaigns
							</h3>
							<p className="text-neutral-600">
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
