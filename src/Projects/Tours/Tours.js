import React from "react";
import AllTours from "./AllTours";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const Tours = () => {
	const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]);

	if (loading)
		return (
			<main>
				<Loading />
			</main>
		);

	return (
		<main>
			<AllTours />
		</main>
	);
};

export default Tours;
