import NextPageButton from "../components/NextPageButton";
import MovieCardInfo from "../components/MovieCardInfo";
import Movies from "../components/Movies";
import NavigationBar from "../components/NavigationBar";
import Spinner from "../components/Spinner";
import { useMoviesFetch } from "../hooks/useMoviesFetch";

const Home = () => {
	const [{ movies, loading, error, haveNextPage }, nextPage] = useMoviesFetch();
	return (
		<>
			<NavigationBar />
			{error ? (
				<p>An unknown error occurred...</p>
			) : (
				<Movies header="Movies from 1999">
					{movies?.map((movie, key) => (
						<MovieCardInfo key={key} movie={movie} />
					))}
				</Movies>
			)}
			{loading && <Spinner />}
			{haveNextPage && <NextPageButton onClick={nextPage} />}
		</>
	);
};
export default Home;
