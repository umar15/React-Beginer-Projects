import React, { useState, useEffect } from "react";
import rgbToHex from "./Utils";

const SingleColor = ({ rgb, weight, index, hexColor }) => {
	//Weight, hexCOlor and rgb coming from values

	const [alert, setAlert] = useState(false);
	const bcg = rgb.join(",");
	// const hex = rgbToHex(...rgb);  second approach to convert rgb to hex
	const hexValue = `#${hexColor}`;

	useEffect(() => {
		const timeout = setTimeout(() => {
			setAlert(false);
		}, 2000);
		return () => clearTimeout(timeout);
	}, [alert]);

	return (
		<article
			className={`color ${index > 10 && "color-light"}`}
			style={{ backgroundColor: `rgb(${bcg})` }}
			onClick={() => {
				setAlert(true);
				navigator.clipboard.writeText(hexValue);
			}}
		>
			<p className="percent-value">{weight}%</p>
			<p className="color-value">{hexValue}</p>
			{alert && <p className="alert">copied to clipboard</p>}
		</article>
	);
};

export default SingleColor;
