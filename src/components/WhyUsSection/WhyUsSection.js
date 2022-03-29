import React from "react";
import { NavLink } from "react-router-dom";

const WhyUs = () => {
	return (
		<div className="container pb-5">
			<div className="py-3">
				<h1 className="pt-5 pb-3 text-center whyus-text">
					Why <span className="text-general">choose us</span>
				</h1>
			</div>
			<div className="row align-items-center pt-3 pb-5">
				<div className="col-lg-6">
					<h3 className="py-3 display-6">
						The Reasons That You Should{" "}
						<span className="text-general">Contact Us</span>
					</h3>
					<p className="py-3">
						Objectively integrate enterprise-wide strategic theme areas with
						fractionalized infrastructures. Interactively productive premium
						technologies. Podcasting operational change management inside of
						workflows to establish. Quickly disseminate superior deliverables
						whereas web-enabled applications. Seamlessly visualize quality
						intellectual capital without superior collaboration. Energetically
						scale future-proof core vis-a-vis impactful experiences with
						optimal.
					</p>
					<div className="py-3">
						<NavLink to="/contact" className="btn btn-general">
							Contact Us
						</NavLink>
					</div>
				</div>
				<div className="col-lg-6">
					<img
						className="img-fluid rounded rounded-3"
						src="https://etreeks.vercel.app/images/image-02.png"
						alt="img-03"
					/>
				</div>
			</div>
		</div>
	);
};

export default WhyUs;
