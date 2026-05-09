import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom";
import axios from "axios";
import { API_CONFIG } from "../constants/appConstants";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import About from "../pages/About";
import Portraits from "../pages/Portraits";
import Fashion from "../pages/Fashion";
import Motion from "../pages/Motion";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

// Loader function to fetch initial images
const homeLoader = async () => {
	const pageNumber = Math.floor(Math.random() * API_CONFIG.MAX_PAGES) + 1;
	try {
		const response = await axios.get(
			`${API_CONFIG.BASE_URL}/list?page=${pageNumber}&limit=${API_CONFIG.IMAGES_PER_PAGE}`,
		);
		return { images: response.data, pageNumber };
	} catch (error) {
		console.error("Error fetching initial images:", error);
		return { images: [], pageNumber };
	}
};

const Router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<MainLayout />}>
			<Route index element={<Home />} loader={homeLoader} />
			<Route path="about" element={<About />} />
			<Route path="portraits" element={<Portraits />} />
			<Route path="fashion" element={<Fashion />} />
			<Route path="motion" element={<Motion />} />
			<Route path="contact" element={<Contact />} />
			<Route path="*" element={<NotFound />} />,
		</Route>,
	),
);

export default Router;
