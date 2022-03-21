import { useParams } from "react-router-dom";
import Section from "../components/Section";
import MovieInfo from "../components/MovieInfo";
import NavigationBar from "../components/NavigationBar";
import PersonaCardInfo from "../components/PersonaCardInfo";
import Spinner from "../components/Spinner";
import { useMovieFetch } from "../hooks/useMovieFetch";
import Review from "../components/Review";
import GoToTop from "../components/GoToTop";

const Movie = () => {
	const { id } = useParams();
	const { movie, directors, actors, reviews, loading, error } =
		useMovieFetch(id);

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
						<Section header={directors.length > 1 ? "Directors" : "Director"}>
							{directors.map(director => (
								<PersonaCardInfo persona={director} />
							))}
						</Section>
					)}
					{actors && (
						<Section header="Actors">
							{actors.map(actor => (
								<PersonaCardInfo persona={actor} />
							))}
						</Section>
					)}
					{reviews && reviews.length > 0 && (
						<Section header="Reviews">
							{reviews.map(review => (
								<Review review={review} />
							))}
						</Section>
					)}
					<GoToTop />
				</>
			)}
		</>
	);
};
export default Movie;
