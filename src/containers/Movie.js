import { useParams } from "react-router-dom";
import Credits from "../components/Credits";
import MovieInfo from "../components/MovieInfo";
import NavigationBar from "../components/NavigationBar";
import PersonaCardInfo from "../components/PersonaCardInfo";
import Spinner from "../components/Spinner";
import { useMovieFetch } from "../hooks/useMovieFetch";

const Movie = () => {
	const { id } = useParams();
	const { movie, directors, actors, loading, error } = useMovieFetch(id);

	return (
		<>
			<NavigationBar movie={movie} />
			{loading ? (
				<Spinner />
			) : error ? (
				<p>An unknown error occurred...</p>
			) : (
				<>
					{movie && <MovieInfo movie={movie} />}
					{directors && (
						<Credits header={directors.length > 1 ? "Directors" : "Director"}>
							{directors.map(director => (
								<PersonaCardInfo persona={director} />
							))}
						</Credits>
					)}
					{actors && (
						<Credits header="Actors">
							{actors.map(actor => (
								<PersonaCardInfo persona={actor} />
							))}
						</Credits>
					)}
				</>
			)}
		</>
	);
};
export default Movie;
