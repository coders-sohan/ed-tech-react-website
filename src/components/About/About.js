import React from "react";
import CounterSection from "../CounterSection/CounterSection";
import "./About.css";

const About = () => {
	return (
		<>
			<div className="about-sec py-5">
				<div className="container py-5">
					<div className="row">
						<div className="col-lg-6">
							<div>
								<p className="m-0 text-general">Todays Hot Offer</p>
								<h1 className="display-5 fw-bold py-3">Learn without limits</h1>
								<p className="m-0">
									Podcasting operational change management <br /> inside of
									workflows to establish.
								</p>
								<ul
									style={{ listStyle: "none", margin: "0", padding: "0" }}
									className="py-3"
								>
									<li>
										<p className="d-flex align-items-center">
											<i className="fas fa-check-square fs-5 text-general"></i>{" "}
											<span className="ms-3">
												Better security for students privacy and information.
											</span>
										</p>
									</li>
									<li>
										<p className="d-flex align-items-center">
											<i className="fas fa-check-square fs-5 text-general"></i>{" "}
											<span className="ms-3">
												More products at lower prices.
											</span>
										</p>
									</li>
									<li>
										<p className="d-flex align-items-center">
											<i className="fas fa-check-square fs-5 text-general"></i>{" "}
											<span className="ms-3">
												connect customers with the power of eCommerce at all.
											</span>
										</p>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-lg-6"></div>
					</div>
				</div>
			</div>
			<CounterSection />
		</>
	);
};

export default About;
