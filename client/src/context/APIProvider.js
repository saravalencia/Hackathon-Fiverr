import React, { useState, useEffect } from 'react';
import fetchData from "../utils/fetchData";

export const context = React.createContext();

const APIProvider = (props) => {

	//states to store data coming from various APIs
	const [freelancers, setFreelancers] = useState({});
	const [freelacersLoaded, setFreelancersLoaded] = useState(false);
	

	useEffect(() => {
		// using the helper function to fetch from 2 APIs
		// you can store the result in this same context or create a new one using this code as a template
		fetchData('http://localhost:5000/api/freelancers', setFreelancers, setFreelancersLoaded);
		
	}, [])

	return (
		<context.Provider value={{ freelancers, freelacersLoaded}} >
			{ props.children }
		</context.Provider>
	)
};

export default APIProvider;