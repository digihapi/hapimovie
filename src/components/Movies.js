import { StyledMovies, StyledMoviesContent } from "../styles/StyledMovies";

const Movies = ({ header, year, onChange, children }) => {
	return (
		<StyledMovies>
			<div className="header-content">
				<h1>{header}</h1>
				{year && (
					<input
						type="number"
						value={year}
						min="1895"
						max={new Date().getFullYear()}
						onChange={onChange}
					/>
				)}
			</div>
			<StyledMoviesContent>{children}</StyledMoviesContent>
		</StyledMovies>
	);
};
export default Movies;
