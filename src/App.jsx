import { useState } from "react";

function App() {
	const [themeMode, setThemeMode] = useState("light");

	const toggleTheme = () => {
		const newMode = themeMode === "light" ? "dark" : "light";

		document.documentElement.classList.remove("light", "dark");
		document.documentElement.classList.add(newMode);

		setThemeMode(newMode);
	};

	return (
		<div className="min-h-screen bg-white dark:bg-amber-300">
			<button
				className="m-4 px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded active:scale-95"
				onClick={toggleTheme}
			>
				Toggle Dark
			</button>

			<h1 className="flex justify-center m-10 bg-yellow-50 dark:bg-gray-950 text-9xl text-black dark:text-white">
				alif
			</h1>
		</div>
	);
}

export default App;
