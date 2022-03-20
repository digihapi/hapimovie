import { useParams } from "react-router-dom";
import MovieInfo from "../components/MovieInfo";
import NavigationBar from "../components/NavigationBar";
import Spinner from "../components/Spinner";
import { useMovieFetch } from "../hooks/useMovieFetch";

const Movie = () => {
	const { id } = useParams();
	const { movie, loading, error } = useMovieFetch(id);

	return (
		<>
			<NavigationBar movie={movie} />
			{loading ? (
				<Spinner />
			) : error ? (
				<p>An unknown error occurred...</p>
			) : (
				movie && <MovieInfo movie={movie} />
			)}
		</>
	);
};
export default Movie;
