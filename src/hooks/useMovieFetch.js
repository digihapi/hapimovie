import { useState, useEffect } from "react";
import constants from "../config/constants";

export const useMovieFetch = movieId => {
	const [movie, setMovie] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchMovie = async url => {
		setError(null);
		setLoading(true);

		try {
			const result = await (await fetch(url)).json();
			setMovie(result);
		} catch (error) {
			setError(error);
		}
		setLoading(false);
	};

	useEffect(() => {
		const {
			HOST,
			API_KEY,
			PATHS: { MOVIE }
		} = constants.API;

		fetchMovie(`${HOST}${MOVIE}/${movieId}?api_key=${API_KEY}`);
	}, []);

	return { movie, loading, error };
};
