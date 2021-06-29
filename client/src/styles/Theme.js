import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
	colors: {
		powderWhite: "#FFFDF9",
		persianGreen: "#105e00",
		lightBlue: "#3104b8",
		onyx: "#36313D",
		fiverrGreen: "#1CBF73"
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