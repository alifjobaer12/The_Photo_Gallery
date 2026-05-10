import { useEffect, useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({ children }) => {
	const [isThemeDark, setIsThemeDark] = useState(true);

	const togolTheme = () => {
		setIsThemeDark((prev) => !prev);
	};

	useEffect(() => {
		const root = document.documentElement;
		root.classList.toggle("dark", isThemeDark);
		root.classList.toggle("light", !isThemeDark);
	}, [isThemeDark]);

	const data = {
		isThemeDark,
		togolTheme,
	};

	return (
		<ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
	);
};

export default ThemeProvider;
