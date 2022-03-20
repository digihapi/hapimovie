import styled from "styled-components";

export const StyledMovies = styled.div`
	margin: 0 auto;
	padding: 0 20px;
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	margin-top: ${props => (props.marginTop ? "70px" : "0")};

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

		input[type="number"] {
			margin-left: 5px;
			min-width: 20px;
			font-family: "Roboto", sans-serif;
			font-size: 42px;
			@media screen and (max-width: 500px) {
				font-size: 22px;
			}
		}
	}
`;

export const StyledMoviesContent = styled.div`
	display: flex;
	flex: 1;
	flex-wrap: wrap;
	justify-content: center;
`;
