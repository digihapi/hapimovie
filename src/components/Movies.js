import { StyledMovies, StyledMoviesContent } from "../styles/StyledMovies";
import { useSearchParams } from "react-router-dom";
import constants from "../config/constants";
import { useEffect } from "react";

const Movies = ({ header, marginTop = false, children }) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const onChangeYear = e => {
		searchParams.delete("page");
		searchParams.set("primary_release_year", e.target.value);
		setSearchParams(searchParams);
		e.preventDefault();
	};
	const { DEFAULT_YEAR } = constants.API;

	useEffect(() => {
		if (
			!searchParams.get("primary_release_year") &&
			!searchParams.get("query")
		) {
			const { DEFAULT_YEAR } = constants.API;
			searchParams.set("primary_release_year", DEFAULT_YEAR);
			setSearchParams(searchParams);
		}
	}, [searchParams, setSearchParams, DEFAULT_YEAR]);

	const handleFocus = event => event.target.select();

	return (
		<StyledMovies marginTop={marginTop}>
			<div className="header-content">
				<h1>{header}</h1>
				{header === "Movies from" && (
					<input
						type="number"
						pattern="[0-9]*"
						value={searchParams.get("primary_release_year") || DEFAULT_YEAR}
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
