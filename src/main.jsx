import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import Router from "./router/Router";
import ThemeProvider from "./context/ThemeProvider";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ThemeProvider>
			<RouterProvider router={Router} />
		</ThemeProvider>
		{/* <App /> */}
	</StrictMode>,
);
