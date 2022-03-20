import { StyledNextPageButton } from "../styles/StyledNextPageButton";
import { useSearchParams } from "react-router-dom";

const NextPageButton = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const onClick = e => {
		const page = parseInt(searchParams.get("page") || "1");
		searchParams.set("page", `${page + 1}`);
		setSearchParams(searchParams);
		e.preventDefault();
	};

	return (
		<StyledNextPageButton type="button" onClick={onClick}>
			{"More..."}
		</StyledNextPageButton>
	);
};
export default NextPageButton;
