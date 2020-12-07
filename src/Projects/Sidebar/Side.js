import React from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";
import "./Sidebar.css";
import { AppProvider } from "./Context";

function Side() {
	return (
		<>
			<AppProvider>
				<Home />
				<Modal />
				<Sidebar />
			</AppProvider>
		</>
	);
}

export default Side;
