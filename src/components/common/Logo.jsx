import { Link } from "react-router-dom";
import logo_dark from "../../assets/logo.png";
import logo_light from "../../assets/logo_light.png";
import { useContext } from "react";
import ThemeContext from "../../context/ThemeContext";

const Logo = () => {
	const { isThemeDark } = useContext(ThemeContext);

	return (
		<div className="h-40 w-60">
			<Link to="/">
				{!isThemeDark ? (
					<img
						className="pt-2 px-2 bg-transparent"
						src={logo_dark}
						alt="logo"
					/>
				) : (
					<img
						className="pt-2 px-2 bg-transparent"
						src={logo_light}
						alt="logo"
					/>
				)}
			</Link>
		</div>
	);
};

export default Logo;
