import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./Data";
import "./Menu.css";

const allCategories = [
	"all",
	...new Set(
		items.map((item) => {
			return item.category;
		})
	),
];

function MenuApp() {
	const [menuItems, setMenuItems] = useState(items);
	const [categories, setCategories] = useState(allCategories);

	const fitlerItems = (category) => {
		if (category === "all") {
			setMenuItems(items);
			return;
		}
		const newItems = items.filter((item) => {
			return item.category === category;
		});
		setMenuItems(newItems);
	};

	return (
		<main>
			<section className="menu section">
				<div className="title">
					<h2>Our Menu</h2>
					<div className="underline"></div>
				</div>
				<Categories categories={categories} filterItems={fitlerItems} />
				<Menu items={menuItems} />
			</section>
		</main>
	);
}

export default MenuApp;
