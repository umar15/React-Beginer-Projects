import React, { useState, useEffect } from "react";
import AllTours from "./AllTours";
import Loading from "./Loading";
import "./Tours.css";

const url = "https://course-api.com/react-tours-project";

const Tours = () => {
	const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]);

	const removeTour = (id) => {
		const newTours = tours.filter((tour) => tour.id !== id);
		setTours(newTours);
	};

	const fetchTours = async () => {
		setLoading(true);
		try {
			const response = await fetch(url);
			const tours = await response.json();
			setLoading(false);
			setTours(tours);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	useEffect(() => {
		fetchTours();
	}, []);

	if (loading)
		return (
			<main>
				<Loading />
			</main>
		);

	if (tours.length === 0) {
		return (
			<main>
				<div className="title">
					<h2>No tours left</h2>
				</div>
				<button onClick={fetchTours} className="btn">
					refresh
				</button>
			</main>
		);
	}

	return (
		<main>
			<AllTours tours={tours} removeTour={removeTour} />
		</main>
	);
};

export default Tours;
