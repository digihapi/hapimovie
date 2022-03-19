import { StyledNextPageButton } from "../styles/StyledNextPageButton";

const NextPageButton = ({ onClick }) => {
	return (
		<StyledNextPageButton type="button" onClick={onClick}>
			{"More..."}
		</StyledNextPageButton>
	);
};
export default NextPageButton;
