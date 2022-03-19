import { StyledMovies, StyledMoviesContent } from "../styles/StyledMovies";

const Movies = ({ header, children }) => {
	return (
		<StyledMovies>
			<h1>{header}</h1>
			<StyledMoviesContent>{children}</StyledMoviesContent>
		</StyledMovies>
	);
};
export default Movies;
