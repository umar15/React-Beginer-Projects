import React from "react";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";

const Home = () => {
	const { openSidebar, openModal } = useGlobalContext; //custom hook
	return (
		<main>
			<button onClick={openSidebar} className="sidebar-toggle">
				<FaBars />
			</button>
			<button onClick={openModal} className="btn">
				show modal
			</button>
		</main>
	);
};

export default Home;
