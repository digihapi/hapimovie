import styled from "styled-components";
import constants from "../config/constants";

const {
	HOST,
	SIZE: {
		BACKDROP: { DEFAULT }
	}
} = constants.IMAGE;

export const StyledMovieInfo = styled.div`
	background: ${props =>
		props.backdrop ? `url('${HOST}${DEFAULT}${props.backdrop}')` : "#000"};
	background-size: cover !important;
	background-position: center !important;
	width: 100%;
	padding: 40px 20px;
	box-sizing: border-box;
	animation: animateMovieinfo 1s;
	margin-top: 70px;

	.movieinfo-content {
		max-width: 1280px;
		min-height: 450px;
		margin: 0 auto;
		background: rgb(0, 0, 0, 0.7);
		border-radius: 20px;
		position: relative;
		overflow: hidden;
		display: block;

		@media screen and (min-width: 768px) {
			height: 450px;
			display: flex;
		}
	}

	img {
		width: 300px;
		float: left;

		@media screen and (max-width: 768px) {
			width: 100% !important;
			margin-bottom: 20px;
		}
	}

	.movieinfo-right {
		display: flex;
		flex: 1;
		flex-direction: column;

		@media screen and (max-width: 768px) {
			display: block;
		}
	}

	.movieinfo-text {
		font-family: Arial, Helvetica, sans-serif;
		padding: 40px;
		color: #fff;

		h1 {
			font-family: "Roboto", sans-serif;
			font-size: 48px;
			margin: 0;

			@media screen and (max-width: 1000px) {
				font-size: 32px !important;
			}
		}

		p {
			font-family: "Roboto", sans-serif;
			font-size: 18px;
			line-height: 26px;
		}
	}

	.icon-content {
		display: flex;
		justify-content: space-between;
		background-color: #000;
		padding: 10px 40px;
	}

	.fa-clock-o,
	.fa-eye,
	.fa-eye-slash {
		color: #fff;
	}

	.fa-eye:hover,
	.fa-eye-slash:hover {
		transform: scale(1.2);
		transition: transform 0.25s ease-out;
	}

	.flex1 {
		display: flex;
		flex: 1;
	}

	.vote-content {
		display: flex;
		flex-direction: row-reverse;
	}

	.vote {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 45px;
		height: 45px;
		border-style: solid;
		border-width: 3px;
		border-color: #fff;
		color: #fff;
		font-weight: 800;
		border-radius: 35px;
		margin: 0px 0 0 0;
	}

	.time-content {
		display: flex;
		flex-direction: row;
		align-items: center;

		p {
			color: #fff;
			margin-left: 5px;
			font-family: "Roboto", sans-serif;
			font-size: 18px;
		}
	}

	@media screen and (max-width: 768px) {
		min-height: 600px;
		height: auto;
	}

	@keyframes animateMovieinfo {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;
