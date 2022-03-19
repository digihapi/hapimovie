import styled from "styled-components";

export const StyledNextPageButton = styled.button`
	background: rgb(0, 0, 0);
	background: linear-gradient(
		75deg,
		rgba(0, 0, 0, 1) 0%,
		rgba(0, 0, 0, 0.7) 50%,
		rgba(0, 0, 0, 0.5) 100%
	);
	width: 320px;
	height: 70px;
	color: #fff;
	cursor: pointer;
	transition: all 0.3s;
	border-radius: 20px;
	font-family: "Roboto", sans-serif;
	font-size: 28px;
	border: 0;
	display: block;
	margin: 20px auto;
	padding: 0 20px;
	outline: none;
	:hover {
		-webkit-box-shadow: 5px 10px 10px -4px rgba(44, 40, 41, 0.4);
		-moz-box-shadow: 5px 10px 10px -4px rgba(44, 40, 41, 0.4);
		box-shadow: 5px 10px 10px -4px rgba(44, 10, 41, 0.4);
	}
`;
