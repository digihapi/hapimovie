import { useState, useEffect } from "react";
import { StyledGoToTop } from "../styles/StyledGoToTop";

const GoToTop = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			const isTop = window.scrollY < 150;

			isTop !== true ? setScrolled(true) : setScrolled(false);
		});
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
