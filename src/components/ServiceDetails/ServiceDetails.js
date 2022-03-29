import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetails = (props) => {
	const { serviceId } = useParams();
	const { services } = props.services;
	console.log(services);

	const singleService = [];

	for (const service of services) {
		// console.log(service.id)
		if (service.id == serviceId) {
			singleService.push(service);
		}
	}
	console.log(services);

	return (
		<div className="container">
			<div className="">
				<img src={singleService[0]?.img} alt="" />

				<h2>{singleService[0]?.name}</h2>
				<p>{singleService[0]?.longDescription}</p>
			</div>
		</div>
	);
};

export default ServiceDetails;
