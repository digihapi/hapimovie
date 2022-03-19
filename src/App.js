import Home from "./containers/Home";
import Favorites from "./containers/Favorites";
import Movie from "./containers/Movie";
import { Routes, Route } from "react-router-dom";
import constants from "./config/constants";
import { FavoritesProvider } from "./context/favorites";

function App() {
	const { HOME, FAVORITES, MOVIE_DETAILS } = constants.APP.PATH;
	return (
		<FavoritesProvider>
			<Routes>
				<Route path={HOME} element={<Home />} />
				<Route path={FAVORITES} element={<Favorites />} />
				<Route path={MOVIE_DETAILS} element={<Movie />} />
			</Routes>
		</FavoritesProvider>
	);
}

export default App;
