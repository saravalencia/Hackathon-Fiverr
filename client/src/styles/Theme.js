import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
	colors: {
		green: "#1dbf73",
		greenLight: "#d0f7e6",
		greenMedium: "#00732e",
		greenDark: "#003912",
		yellow: "#d0e500",
		yellowLight: "#f1f4cb",
		yellowMedium: "#687200",
		yellowDark: "#254200",
		pink: "#ff80ae",
		pinkLight: "#ffd3e2",
		pinkMedium: "#be5272",
		pinkDark: "#4d1727",
		orange: "#ff7640",
		orangeLight: "#ffe0d4",
		orangeMedium: "#8f2900",
		orangeDark: "#421300",
		onyx: "#36313D"
	},
	
	fontSizes: {
		small: "1em",
		medium: "2em",
		large: "3em"
	}
};



const Theme = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;