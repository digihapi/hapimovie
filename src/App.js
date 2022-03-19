import Home from "./containers/Home";
import Favorites from "./containers/Favorites";
import Movie from "./containers/Movie";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/favorites" element={<Favorites />} />
			<Route path="/:movieId" element={<Movie />} />
		</Routes>
	);
}

export default App;
