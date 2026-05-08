const Portraits = () => {
	return (
		<section className="min-h-screen bg-[#efefef] flex flex-col md:ml-80">
			<div className="pt-20 md:pt-12 px-6 md:px-8 flex-1 flex flex-col justify-center">
				<div className="max-w-3xl mx-auto w-full">
					<h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
						Portrait Photography
					</h1>
					<p className="text-neutral-600 mb-8 text-lg">
						Capturing the essence of every individual
					</p>
					<p className="text-neutral-700 mb-6 leading-relaxed">
						Our portrait photography collection showcases the
						beauty, emotion, and uniqueness of people. From candid
						moments to carefully composed studio shots, we bring out
						the best in every subject.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
						<div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-600">
							<h3 className="text-xl font-semibold text-neutral-900 mb-2">
								Professional Headshots
							</h3>
							<p className="text-neutral-600">
								High-quality portraits perfect for business
								profiles, LinkedIn, and corporate branding.
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-600">
							<h3 className="text-xl font-semibold text-neutral-900 mb-2">
								Family Sessions
							</h3>
							<p className="text-neutral-600">
								Capture precious moments with loved ones in
								natural and studio settings.
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-600">
							<h3 className="text-xl font-semibold text-neutral-900 mb-2">
								Wedding Portraits
							</h3>
							<p className="text-neutral-600">
								Elegant and timeless portraits that celebrate
								your special moments.
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-600">
							<h3 className="text-xl font-semibold text-neutral-900 mb-2">
								Creative Concepts
							</h3>
							<p className="text-neutral-600">
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
