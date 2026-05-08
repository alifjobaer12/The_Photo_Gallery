import {
	FaFacebookF,
	FaInstagram,
	FaTwitter,
	FaSkype,
	FaLinkedinIn,
	FaDribbble,
} from "react-icons/fa";

// Navigation links
let active = false;
export let NAV_LINKS = [
	{ name: "Home", path: "/", active: active },
	{ name: "About", path: "/about", active: active },
	{ name: "Portraits", path: "/portraits", active: active },
	{ name: "Fashion", path: "/fashion", active: active },
	{ name: "Motion", path: "/motion", active: active },
	{ name: "Contact", path: "/contact", active: active },
];

// Social media links
export const SOCIAL_LINKS = [
	{ icon: FaFacebookF, link: "https://www.facebook.com/" },
	{ icon: FaInstagram, link: "https://www.instagram.com/" },
	{ icon: FaTwitter, link: "https://www.twitter.com/" },
	{ icon: FaSkype, link: "https://www.skype.com/" },
	{ icon: FaLinkedinIn, link: "https://www.linkedin.com/" },
	{ icon: FaDribbble, link: "https://dribbble.com/" },
];

// API configuration
export const API_CONFIG = {
	BASE_URL: import.meta.env.VITE_API_URL || "https://picsum.photos/v2",
	IMAGES_PER_PAGE: 12,
	MAX_PAGES: 50,
};
