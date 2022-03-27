import styled from "styled-components";

export const StyledMovieCardInfo = styled.div`
	margin: 20px;

	.info-content {
		display: flex;
		flex-direction: column;
		background: rgb(0, 0, 0, 0.7);
		border-radius: 20px;
		overflow: hidden;
		animation: animateMovieinfo 1s;
		width: 320px;
		height: 100%;

		:hover {
			-webkit-box-shadow: 10px 10px 33px -4px rgba(0, 0, 0, 0.4);
			-moz-box-shadow: 10px 10px 33px -4px rgba(0, 0, 0, 0.4);
			box-shadow: 10px 10px 33px -4px rgba(0, 0, 0, 0.4);
		}

		img {
			width: 100%;
		}

		@media screen and (max-width: 768px) {
			width: 100%;
		}
	}

	.info-text {
		display: flex;
		flex-direction: column;
		flex: 1;
		font-family: "Roboto", sans-serif;
		color: #fff;
		padding: 10px;
		text-decoration: "none";
		text-align: center;

		h1 {
			font-size: 22px;
			margin: 0;

			@media screen and (min-width: 500px) and (max-width: 768px) {
				font-size: 28px !important;
			}
		}

		h3 {
			font-size: 16px;
			font-style: italic;
			line-height: 0;
			margin-top: 20px;
		}
	}

	.icons-content {
		background-color: #000;
		display: flex;
		justify-content: space-between;
		padding: 10px 20px;
	}

	.fa-eye,
	.fa-eye-slash {
		color: #fff;
	}

	.fa-eye:hover,
	.fa-eye-slash:hover {
		transform: scale(1.2);
		transition: transform 0.25s ease-out;
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

	@keyframes animateMovieinfo {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;
