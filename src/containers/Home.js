import MovieCardInfo from "../components/MovieCardInfo";
import Movies from "../components/Movies";
import NavigationBar from "../components/NavigationBar";
import NextPageButton from "../components/NextPageButton";
import Sort from "../components/Sort";
import Spinner from "../components/Spinner";
import { useMoviesFetch } from "../hooks/useMoviesFetch";

const Home = () => {
	const { movies, loading, error, haveNextPage } = useMoviesFetch();

	return (
		<>
			<NavigationBar />
			{error ? (
				<p>An unknown error occurred...</p>
			) : (
				<Movies header="Movies from">
					<Sort />
					{movies?.map((movie, key) => (
						<MovieCardInfo key={key} movie={movie} />
					))}
				</Movies>
			)}
			{loading && <Spinner />}
			{haveNextPage && <NextPageButton />}
		</>
	);
};
export default Home;
