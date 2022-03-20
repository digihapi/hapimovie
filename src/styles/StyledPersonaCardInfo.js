import styled from "styled-components";

export const StyledPersonaCardInfo = styled.div`
	margin: 10px;

	.info-content {
		display: flex;
		flex-direction: column;
		background: rgb(0, 0, 0, 0.7);
		border-radius: 10px;
		overflow: hidden;
		animation: animateMovieinfo 1s;
		width: 160px;
		height: 100%;

		img {
			width: 100%;
		}
	}

	span {
		color: #fff;
		font-family: "Roboto", sans-serif;
		text-align: center;
	}

	.persona-name {
		display: block;
		font-size: 14px;
		margin: 10px 0 0 0;
		font-weight: bold;
	}

	.persona-character {
		display: block;
		font-size: 12px;
		margin: 0 0 10px 0;
		font-style: italic;
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
