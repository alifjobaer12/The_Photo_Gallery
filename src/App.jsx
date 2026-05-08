import { Route, Routes } from "react-router-dom";
import SideBar from "./components/sideBar/SideBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portraits from "./pages/Portraits";
import Contact from "./pages/Contact";
import Fashion from "./pages/Fashion";
import Motion from "./pages/Motion";

const App = () => {
	return (
		<main className="min-h-screen bg-[#efefef] flex flex-col md:flex-row ">
			<div className="w-full pt-16 md:fixed md:left-0 md:top-0 md:h-screen md:w-80 md:overflow-y-auto md:pt-0">
				<SideBar />
			</div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/portraits" element={<Portraits />} />
				<Route path="/fashion" element={<Fashion />} />
				<Route path="/motion" element={<Motion />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</main>
	);
};

export default App;
