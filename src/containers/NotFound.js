import NavigationBar from "../components/NavigationBar";
import { StyledNotFound } from "../styles/StyledNotFound";

const NotFound = () => {
	return (
		<>
			<NavigationBar />
			<StyledNotFound>
				<h1>{"Page not found"}</h1>
			</StyledNotFound>
		</>
	);
};

export default NotFound;
