import { StyledMovies, StyledMoviesContent } from "../styles/StyledMovies";
import { useSearchParams } from "react-router-dom";
import constants from "../config/constants";

const Movies = ({ header, marginTop = false, children }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	const { DEFAULT_YEAR } = constants.API;

	const onChangeYear = e => {
		searchParams.delete("page");
		searchParams.set("year", e.target.value);
		setSearchParams(searchParams);
		e.preventDefault();
	};

	const handleFocus = event => event.target.select();

	return (
		<StyledMovies marginTop={marginTop}>
			<div className="header-content">
				<h1>{header}</h1>
				{header === "Movies from" && (
					<input
						type="number"
						pattern="[0-9]*"
						value={searchParams.get("year") || DEFAULT_YEAR}
						min="1895"
						max={new Date().getFullYear()}
						onChange={onChangeYear}
						onFocus={handleFocus}
					/>
				)}
			</div>
			<StyledMoviesContent>{children}</StyledMoviesContent>
		</StyledMovies>
	);
};
export default Movies;
