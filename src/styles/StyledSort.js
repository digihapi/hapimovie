import styled from "styled-components";

export const StyledSort = styled.div`
	width: 100%;

	.sort-container {
		display: flex;
		flex: 1;
		flex-direction: row-reverse;

		p {
			font-family: "Roboto", sans-serif;
			font-size: 16px;
			padding-right: 10px;
			text-decoration: none;
		}

		.clickable {
			color: #aaa;
			cursor: pointer;
		}

		.current {
			text-decoration: underline;
			color: #000;
		}
	}
`;
