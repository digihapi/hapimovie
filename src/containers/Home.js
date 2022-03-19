import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
const Home = () => {
	return (
		<>
			<NavigationBar />
			<Link to="/details/233">Matrix</Link>
		</>
	);
};
export default Home;
