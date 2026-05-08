import { Link, useLocation } from "react-router-dom";
import { NAV_LINKS } from "../../../constants/appConstants";

const Middle = () => {
	const location = useLocation();

	return (
		<nav className="flex flex-1 flex-col items-center gap-4 py-4 sm:gap-6 sm:py-8">
			{NAV_LINKS.map((link) => {
				const isActive = location.pathname === link.path;
				return (
					<Link
						className={`w-fit border-b border-transparent pb-1 text-[12px] font-medium uppercase tracking-[0.12em] text-neutral-600/70 transition-colors duration-200 hover:text-neutral-950 sm:text-[14px] ${isActive ? "border-neutral-400 text-neutral-950" : ""}`}
						to={link.path}
						key={link.name}
					>
						{link.name}
					</Link>
				);
			})}
		</nav>
	);
};

export default Middle;
