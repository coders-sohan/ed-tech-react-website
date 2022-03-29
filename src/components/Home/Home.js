import React from "react";
import CounterSection from "../CounterSection/CounterSection";
import HeroSection from "../HeroSection/HeroSection";
import ServiceSection from "../ServiceSection/ServiceSection";
import WhyUs from "../WhyUsSection/WhyUsSection";
import "./Home.css";

const Home = () => {
	return (
		<>
			<HeroSection />
			<WhyUs />
			<ServiceSection />
			<CounterSection />
		</>
	);
};

export default Home;
