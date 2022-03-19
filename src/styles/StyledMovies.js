import styled from "styled-components";

export const StyledMoviesContent = styled.div`
	display: flex;
	flex: 1;
	flex-wrap: wrap;
	justify-content: center;
`;

export const StyledMovies = styled.div`
	margin: 0 auto;
	padding: 0 20px;
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	h1 {
		font-family: "Roboto", sans-serif;
		font-size: 42px;

		@media screen and (max-width: 500px) {
			font-size: 22px;
		}
	}
`;
