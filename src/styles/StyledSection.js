import styled from "styled-components";

export const StyledSection = styled.div`
	margin: 0 auto;
	padding: 0 10px;
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;

	.header-content {
		display: flex;
		flex-direction: row;

		h1 {
			font-family: "Roboto", sans-serif;
			font-size: 42px;
			@media screen and (max-width: 500px) {
				font-size: 22px;
			}
		}
	}
`;

export const StyledSectionContent = styled.div`
	display: flex;
	flex: 1;
	flex-wrap: wrap;
	justify-content: center;
`;
