import styled from "styled-components";

export const StyledReview = styled.div`
	display: flex;
	flex-direction: column;
	background: rgb(0, 0, 0, 0.7);
	border-radius: 20px;
	overflow: hidden;
	animation: animateReview 1s;
	width: 520px;
	height: 100%;
	padding: 20px;
	margin: 20px;

	@media screen and (max-width: 768px) {
		width: 100%;
	}

	.author {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.column {
		display: flex;
		flex-direction: column;
		margin-left: 10px;
	}

	span {
		font-family: "Roboto", sans-serif;
		font-size: 14px;
		color: #fff;
		@media screen and (max-width: 500px) {
			font-size: 10x;
		}
	}

	p {
		color: #fff;
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

	@keyframes animateReview {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
`;
