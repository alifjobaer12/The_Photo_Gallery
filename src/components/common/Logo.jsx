import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Logo = () => {
	return (
		<div className="h-40 w-60">
			<Link to="/">
				<img className="pt-2 px-2 bg-transparent" src={logo} alt="logo" />
			</Link>
		</div>
	);
};

export default Logo;
