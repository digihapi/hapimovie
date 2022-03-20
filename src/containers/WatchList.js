import MovieCardInfo from "../components/MovieCardInfo";
import Movies from "../components/Movies";
import NavigationBar from "../components/NavigationBar";
import { useWatchList } from "../context/watchList";

const WatchList = () => {
	const {
		state: { watchList }
	} = useWatchList();

	return (
		<>
			<NavigationBar />
			<Movies
				header={
					watchList && Object.keys(watchList).length > 0
						? "My watch list"
						: "No watch list"
				}
			>
				{watchList &&
					Object.keys(watchList).length > 0 &&
					Object.values(watchList).map((movie, key) => (
						<MovieCardInfo key={key} movie={movie} />
					))}
			</Movies>
		</>
	);
};

export default WatchList;
