import React from "react";

const Contact = () => {
	return (
		<>
			{/* contact section style */}
			<section>
				<div className="container mx-auto py-5">
					<div className="">
						<h1 className="pb-3 text-center whyus-text">
							Contact <span className="text-general">Us</span>
						</h1>
					</div>
					<div className="row mt-4 justify-content-center align-item-center">
						<div className="col-lg-5 p-5 mx-3">
							<div className="px-5 py-3 mb-4 border border-2 rounded">
								<h1 className="text-center display-5">Address -</h1>
								<p className="m-0 text-center text-general">
									2B/73, Central Park
								</p>
								<p className="m-0 text-center text-general">California, USA</p>
							</div>
							<div className="px-5 py-3 mb-4 border border-2 rounded">
								<h1 className="text-center display-5">Email -</h1>
								<div className="m-0 text-center">
									<a
										className="text-decoration-none text-general"
										href="mailto:example@gmail.com"
									>
										example@gmail.com
									</a>
								</div>
							</div>
							<div className="px-5 py-3 mb-4 border border-2 rounded">
								<h1 className="text-center display-5">Phone -</h1>
								<p className="m-0 text-center text-general">+123-456-789-098</p>
							</div>
						</div>
						<div className="col-lg-5 p-5 mx-3">
							<div>
								<h2>
									Get <span className="text-general">In Touch</span>
								</h2>
								<p className="m-0 pt-3 fw-6">
									Have a question or just want to say hi? <br /> We'd love to
									hear from you.
								</p>
								<div className="py-3">
									<label htmlFor="name">Name</label>
									<input
										type="text"
										id="name"
										name="name"
										className="form-control"
									/>
								</div>
								<div className="py-3">
									<label htmlFor="email">Email</label>
									<input
										type="email"
										id="email"
										name="email"
										className="form-control"
									/>
								</div>
								<div className="py-3">
									<label htmlFor="message" className="">
										Message
									</label>
									<textarea
										id="message"
										name="message"
										className="form-control"
										style={{ height: "150px" }}
									></textarea>
								</div>
								<button className="btn btn-general">
									<span>Submit</span>
									<span className="ms-2">
										<i className="fas fa-paper-plane"></i>
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contact;
