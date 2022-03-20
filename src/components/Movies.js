import { StyledMovies, StyledMoviesContent } from "../styles/StyledMovies";
import { useSearchParams } from "react-router-dom";
import constants from "../config/constants";

const Movies = ({ header, children }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const { DEFAULT_YEAR } = constants.API;

	const onChangeYear = e => {
		searchParams.set("year", e.target.value);
		setSearchParams(searchParams);
		e.preventDefault();
	};

	return (
		<StyledMovies>
			<div className="header-content">
				<h1>{header}</h1>
				{header === "Movies from" && (
					<input
						type="number"
						value={searchParams.get("year") || DEFAULT_YEAR}
						min="1895"
						max={new Date().getFullYear()}
						onChange={onChangeYear}
					/>
				)}
			</div>
			<StyledMoviesContent>{children}</StyledMoviesContent>
		</StyledMovies>
	);
};
export default Movies;
