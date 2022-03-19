import { useParams } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";

const Movie = () => {
	const { movieId } = useParams();
	return (
		<>
			<NavigationBar movie={"Matrix"} />
			<h1>{movieId}</h1>
		</>
	);
};
export default Movie;
