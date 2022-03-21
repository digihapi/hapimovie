import styled from "styled-components";

export const StyledNotFound = styled.div`
	margin-top: 70px;
	display: flex;
	flex: 1;
	justify-content: center;
	align-items: center;

	h1 {
		font-family: "Roboto", sans-serif;
		font-size: 42px;
		@media screen and (max-width: 500px) {
			font-size: 22px;
		}
	}
`;
