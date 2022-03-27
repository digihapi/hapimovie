import GoToTop from "../components/GoToTop";
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
				marginTop={true}
				header={watchList?.length > 0 ? "My watch list" : "No watch list"}
			>
				{watchList &&
					watchList?.length > 0 &&
					watchList.map((movie, key) => (
						<MovieCardInfo key={key} movie={movie} />
					))}
				<GoToTop />
			</Movies>
		</>
	);
};

export default WatchList;
