import { SOCIAL_LINKS } from "../../../constants/appConstants";

const Bottom = () => {
	return (
		<footer className="flex flex-col items-center pt-8 sm:pt-10">
			<a
				className="block w-fit border-b border-neutral-300 pb-1 text-[10px] font-medium text-neutral-700 sm:text-[11px]"
				href="mailto:contact@yoursite.com"
			>
				contact@yoursite.com
			</a>
			<div className="mt-5 flex items-center gap-3 text-neutral-800 sm:gap-4">
				{SOCIAL_LINKS.map((link, index) => (
					<a
						aria-label={link.icon.name}
						href={link.link}
						key={index}
						rel="noreferrer"
						target="_blank"
					>
						<link.icon size={17} />
					</a>
				))}
			</div>
		</footer>
	);
};

export default Bottom;
