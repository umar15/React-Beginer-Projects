import React, { useState } from "react";
import data from "./Data";
import SingleQuestion from "./Question";
import "./Accordion.css";

function Accordion() {
	const [questions, setQuestions] = useState(data);
	return (
		<main>
			<div className="container">
				<h3>Questions and Answers about login</h3>
				<section className="info">
					{questions.map((question) => {
						return <SingleQuestion key={question.id} {...question} />;
					})}
				</section>
			</div>
		</main>
	);
}

export default Accordion;
