import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Portraits from "../pages/Portraits";
import Fashion from "../pages/Fashion";
import Motion from "../pages/Motion";
import Contact from "../pages/Contact";

const Router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<MainLayout />}>
			<Route index element={<Home />} />
			<Route path="about" element={<About />} />
			<Route path="portraits" element={<Portraits />} />
			<Route path="fashion" element={<Fashion />} />
			<Route path="motion" element={<Motion />} />
			<Route path="contact" element={<Contact />} />
		</Route>,
	),
);

export default Router;
