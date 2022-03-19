import { useState, useEffect } from "react";
import constants from "../config/constants";

export const useMoviesFetch = () => {
	const [movies, setMovies] = useState({ movies: [] });
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchMovies = async url => {
		setError(null);
		setLoading(true);

		try {
			const result = await (await fetch(url)).json();
			setMovies([...result.results]);
		} catch (error) {
			setError(error);
		}
		setLoading(false);
	};

	useEffect(() => {
		const {
			HOST,
			API_KEY,
			PATHS: { MOVIE, DISCOVER }
		} = constants.API;

		// By default fetch movies from 1999
		fetchMovies(
			`${HOST}${DISCOVER}${MOVIE}?primary_release_year=1999&api_key=${API_KEY}`
		);
	}, []);

	return [{ movies, loading, error }];
};
