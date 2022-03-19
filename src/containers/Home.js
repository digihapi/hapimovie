import { Link } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import Spinner from "../components/Spinner";
import { useMoviesFetch } from "../hooks/useMoviesFetch";

const Home = () => {
	const [{ movies, loading, error }] = useMoviesFetch();
	return (
		<>
			<NavigationBar />
			{loading ? (
				<Spinner />
			) : error ? (
				<p>An unknown error occurred...</p>
			) : (
				<Link to={`/details/${movies?.[0]?.id}`}>
					{movies?.[0]?.original_title || "Empty"}
				</Link>
			)}
		</>
	);
};
export default Home;
