import React from "react";
import { Link } from "react-router-dom";

const ServiceItem = (props) => {
	const { id, name, img2, description } = props.service;
	return (
		<div>
			<div className="col">
				<div className="card h-100">
					<img src={img2} height="300px" className="card-img-top" alt={name} />
					<div className="card-body">
						<h4 className="card-title py-2">{name}</h4>
						<p className="card-text">{description}</p>
					</div>
					<div className="card-footer text-center">
						<Link to={`/healthcare/${id}`}>
							<button className="btn btn-general">Learn More</button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ServiceItem;
