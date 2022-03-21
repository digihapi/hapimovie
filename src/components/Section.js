import { StyledSection, StyledSectionContent } from "../styles/StyledSection";

const Section = ({ header, children }) => {
	return (
		<StyledSection>
			<div className="header-content">
				<h1>{header}</h1>
			</div>
			<StyledSectionContent>{children}</StyledSectionContent>
		</StyledSection>
	);
};
export default Section;
