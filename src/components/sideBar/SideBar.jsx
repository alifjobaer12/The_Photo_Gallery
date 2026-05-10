import Bottom from "./sideBarComponent/Bottom";
import Middle from "./sideBarComponent/Middle";
import Top from "./sideBarComponent/Top";
import LogoImage from "../../assets/logo.png";
import { useState } from "react";
import { CgClose, CgMenuLeftAlt } from "react-icons/cg";
import { Link } from "react-router-dom";

const SideBar = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
			<div className="fixed left-0 top-0 z-50 flex h-16 w-full items-center justify-between border-b border-neutral-200 bg-white px-4 transition-colors duration-300 dark:border-neutral-800 dark:bg-neutral-900 md:hidden">
				<button
					type="button"
					aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
					onClick={() => setMobileMenuOpen((open) => !open)}
					className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 text-neutral-900 dark:text-neutral-100"
				>
					{mobileMenuOpen ? (
						<CgClose size={25} />
					) : (
						<CgMenuLeftAlt size={25} />
					)}
				</button>
				<Link to="/">
					<img
						className="absolute left-1/2 top-1/2 h-10 -translate-x-1/2 -translate-y-1/2"
						src={LogoImage}
						alt="logo"
					/>
				</Link>
			</div>

			{mobileMenuOpen && (
				<>
					<button
						type="button"
						aria-label="Close menu backdrop"
						onClick={() => setMobileMenuOpen(false)}
						className="fixed inset-0 z-40 bg-black/30 md:hidden"
					/>
					<div className="fixed left-0 top-16 z-50 h-[calc(100vh-4rem)] w-[85vw] max-w-sm bg-white shadow-2xl transition-colors duration-300 dark:bg-neutral-900 md:hidden">
						<aside className="flex h-full w-full flex-col bg-white px-4 pt-6 pb-35 transition-colors duration-300 dark:bg-neutral-900 sm:px-6">
							<Middle />
							<Bottom />
						</aside>
					</div>
				</>
			)}

			<aside className="hidden min-h-[85vh] w-full flex-col bg-white px-4 py-6 transition-colors duration-300 dark:bg-neutral-900 sm:px-6 md:min-h-screen md:px-8 md:pb-8 md:flex">
				<Top />
				<Middle />
				<Bottom />
			</aside>
		</>
	);
};

export default SideBar;
