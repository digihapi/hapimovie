import { useSearchParams } from "react-router-dom";
import MovieCardInfo from "../components/MovieCardInfo";
import Movies from "../components/Movies";
import NavigationBar from "../components/NavigationBar";
import NextPageButton from "../components/NextPageButton";
import SearchBar from "../components/SearchBar";
import Sort from "../components/Sort";
import Spinner from "../components/Spinner";
import { useMoviesFetch } from "../hooks/useMoviesFetch";

const Home = () => {
	const { movies, loading, error, haveNextPage } = useMoviesFetch();
	const [searchParams] = useSearchParams();

	return (
		<>
			<NavigationBar />
			<SearchBar />
			{error ? (
				<p>An unknown error occurred...</p>
			) : (
				<Movies
					header={
						searchParams.get("query")
							? movies?.length > 0
								? "Search result"
								: "No result"
							: "Movies from"
					}
				>
					{!searchParams.get("query") && <Sort />}
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
