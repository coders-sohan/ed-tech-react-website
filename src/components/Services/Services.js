import React, { useEffect, useState } from "react";
import ServiceItem from "../ServiceItem/ServiceItem";

const Services = () => {
	const [services, setServices] = useState([]);
	useEffect(() => {
		fetch("./data.JSON")
			.then((res) => res.json())
			.then((data) => setServices(data));
	}, []);
	return (
		<div className="bg-light">
			<div className="container py-5">
				<div className="py-3">
					<h1 className="pb-3 text-center whyus-text">
						Our <span className="text-general">Courses</span>
					</h1>
				</div>
				<div className="mt-4">
					<div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
						{services.map((service) => (
							<ServiceItem key={service.id} service={service}></ServiceItem>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Services;
