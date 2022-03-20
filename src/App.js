import Home from "./containers/Home";
import WatchList from "./containers/WatchList";
import Movie from "./containers/Movie";
import { Routes, Route } from "react-router-dom";
import constants from "./config/constants";
import { WatchListProvider } from "./context/watchList";

function App() {
	const { HOME, WATCH_LIST, MOVIE_DETAILS } = constants.APP.PATH;
	return (
		<WatchListProvider>
			<Routes>
				<Route path={HOME} element={<Home />} />
				<Route path={WATCH_LIST} element={<WatchList />} />
				<Route path={MOVIE_DETAILS} element={<Movie />} />
			</Routes>
		</WatchListProvider>
	);
}

export default App;
