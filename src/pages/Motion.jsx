const Motion = () => {
	return (
		<section className="min-h-screen bg-[#efefef] flex flex-col md:ml-80">
			<div className="pt-20 md:pt-12 px-6 md:px-8 flex-1 flex flex-col justify-center">
				<div className="max-w-3xl mx-auto w-full">
					<h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
						Motion & Video
					</h1>
					<p className="text-neutral-600 mb-8 text-lg">
						Bringing stories to life through dynamic video content
					</p>
					<p className="text-neutral-700 mb-6 leading-relaxed">
						Our motion and video production services combine
						cinematography, storytelling, and technical expertise to
						create compelling visual narratives. From concept to
						final cut, we deliver professional video content.
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
						<div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-600">
							<h3 className="text-xl font-semibold text-neutral-900 mb-2">
								Corporate Videos
							</h3>
							<p className="text-neutral-600">
								Professional videos for corporate communications
								and brand messaging.
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-600">
							<h3 className="text-xl font-semibold text-neutral-900 mb-2">
								Documentaries
							</h3>
							<p className="text-neutral-600">
								In-depth documentary work that tells important
								and impactful stories.
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-600">
							<h3 className="text-xl font-semibold text-neutral-900 mb-2">
								Event Coverage
							</h3>
							<p className="text-neutral-600">
								Professional videography for weddings,
								conferences, and special events.
							</p>
						</div>
						<div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-red-600">
							<h3 className="text-xl font-semibold text-neutral-900 mb-2">
								Music Videos
							</h3>
							<p className="text-neutral-600">
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
