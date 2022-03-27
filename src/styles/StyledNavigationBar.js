import styled from "styled-components";

export const StyledNavigationBar = styled.div`
	display: flex;
	flex: 1;
	align-items: center;
	width: 100%;
	height: 70px;
	background: #444041;
	color: #fff;
	position: fixed;
	z-index: 999;
	top: 0;

	.navigation {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 20px;
		width: 100%;
		display: flex;
		i {
			color: #aaa;
			padding-left: 10px;
		}
		.current {
			color: #fff;
		}
	}

	a {
		display: flex;
		align-items: center;
		text-decoration: none;
	}

	span {
		color: #aaa;
		font-family: "Roboto", sans-serif;
		font-size: 16px;
		margin-left: 5px;
		margin-right: 10px;

		@media screen and (max-width: 768px) {
			display: none;
		}
	}

	img {
		width: 122px;
		float: right;
		margin-right: 20px;

		@media screen and (max-width: 500px) {
			display: inline-block;
			width: 80px;
			margin-top: 0px;
		}
	}
`;
