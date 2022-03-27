import { useState, useEffect } from "react";
import { StyledGoToTop } from "../styles/StyledGoToTop";

const GoToTop = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			const isTop = window.scrollY < 150;

			isTop !== true ? setScrolled(true) : setScrolled(false);
		};

		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	function handleGoToTop() {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	}

	return (
		<StyledGoToTop>
			{scrolled && (
				<button
					id="goToTop"
					onClick={() => handleGoToTop()}
					title="Go to top"
				/>
			)}
		</StyledGoToTop>
	);
};

export default GoToTop;
