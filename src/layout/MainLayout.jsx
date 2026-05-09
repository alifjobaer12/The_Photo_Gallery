import { Outlet } from "react-router-dom";
import SideBar from "../components/sideBar/SideBar";

const MainLayout = () => {
	return (
		<main className="min-h-screen bg-[#efefef] flex flex-col md:flex-row ">
			<div className="w-full pt-16 md:fixed md:left-0 md:top-0 md:h-screen md:w-80 md:overflow-y-auto md:pt-0">
				<SideBar />
			</div>
			<Outlet />
		</main>
	);
};

export default MainLayout;
