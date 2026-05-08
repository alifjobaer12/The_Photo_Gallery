import { useState } from "react";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("Form submitted:", formData);
		alert("Thank you for reaching out! We will get back to you soon.");
		setFormData({ name: "", email: "", subject: "", message: "" });
	};

	return (
		<section className="min-h-screen bg-[#efefef] flex flex-col md:ml-80">
			<div className="pt-20 md:pt-12 px-6 md:px-8 flex-1 flex flex-col justify-center">
				<div className="max-w-2xl mx-auto w-full">
					<h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-2">
						Get In Touch
					</h1>
					<p className="text-neutral-600 mb-8 text-lg">
						We'd love to hear from you. Send us a message!
					</p>

					<form
						onSubmit={handleSubmit}
						className="bg-white p-8 rounded-lg shadow-sm space-y-5"
					>
						<div>
							<label className="block text-sm font-medium text-neutral-700 mb-2">
								Name
							</label>
							<input
								type="text"
								name="name"
								value={formData.name}
								onChange={handleChange}
								required
								className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
								placeholder="Your name"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-neutral-700 mb-2">
								Email
							</label>
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								required
								className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
								placeholder="your.email@example.com"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-neutral-700 mb-2">
								Subject
							</label>
							<input
								type="text"
								name="subject"
								value={formData.subject}
								onChange={handleChange}
								required
								className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600"
								placeholder="Project inquiry"
							/>
						</div>

						<div>
							<label className="block text-sm font-medium text-neutral-700 mb-2">
								Message
							</label>
							<textarea
								name="message"
								value={formData.message}
								onChange={handleChange}
								required
								rows="4"
								className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:border-red-600 focus:ring-1 focus:ring-red-600 resize-none"
								placeholder="Tell us about your project..."
							/>
						</div>

						<button
							type="submit"
							className="w-full bg-red-600 text-white font-semibold py-3 rounded-lg hover:bg-red-700 transition-colors duration-200"
						>
							Send Message
						</button>
					</form>

					<div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
						<div>
							<h3 className="text-lg font-semibold text-neutral-900 mb-2">
								Email
							</h3>
							<a
								href="mailto:contact@thephotogallery.com"
								className="text-neutral-600 hover:text-red-600 transition-colors"
							>
								contact@thephotogallery.com
							</a>
						</div>
						<div>
							<h3 className="text-lg font-semibold text-neutral-900 mb-2">
								Phone
							</h3>
							<p className="text-neutral-600">
								+1 (555) 123-4567
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
