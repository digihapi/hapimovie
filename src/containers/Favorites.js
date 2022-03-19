import MovieCardInfo from "../components/MovieCardInfo";
import Movies from "../components/Movies";
import NavigationBar from "../components/NavigationBar";
import { useFavorites } from "../context/favorites";

const Favorites = () => {
	const {
		state: { favorites }
	} = useFavorites();

	return (
		<>
			<NavigationBar />
			<Movies header="My favorite playlist">
				{favorites &&
					Object.values(favorites).map((movie, key) => (
						<MovieCardInfo key={key} movie={movie} />
					))}
			</Movies>
		</>
	);
};

export default Favorites;
