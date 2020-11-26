import React, { useState } from "react";
import Data from "./Data";
import List from "./List";
import "./BirthdayReminder.css";

const BirthdayReminder = () => {
	const [people, setPeople] = useState(Data);
	return (
		<main>
			<section className="container">
				<h3>{people.length} Birthdays Today</h3>
				<List people={people} />
				<button onClick={() => setPeople([])}>Clear All</button>
			</section>
		</main>
	);
};

export default BirthdayReminder;
