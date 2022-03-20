import { StyledCredits, StyledCreditsContent } from "../styles/StyledCredits";

const Credits = ({ header, children }) => {
	return (
		<StyledCredits>
			<div className="header-content">
				<h1>{header}</h1>
			</div>
			<StyledCreditsContent>{children}</StyledCreditsContent>
		</StyledCredits>
	);
};
export default Credits;
