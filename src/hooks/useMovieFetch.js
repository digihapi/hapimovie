import { useState, useEffect } from "react";
import constants from "../config/constants";

export const useMovieFetch = movieId => {
	const [movie, setMovie] = useState(null);
	const [directors, setDirectors] = useState([]);
	const [actors, setActors] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const fetchMovie = async urls => {
		setError(null);
		setLoading(true);

		try {
			const movieResult = await (await fetch(urls[0])).json();
			setMovie(movieResult);
			const creditsResult = await (await fetch(urls[1])).json();
			const directorsJobs = creditsResult.crew.filter(
				member => member.job === "Director"
			);
			setDirectors(directorsJobs);
			setActors(creditsResult.cast);
		} catch (error) {
			setError(error);
		}
		setLoading(false);
	};

	useEffect(() => {
		const {
			HOST,
			API_KEY,
			PATHS: { MOVIE, CREDITS }
		} = constants.API;

		fetchMovie([
			`${HOST}${MOVIE}/${movieId}?api_key=${API_KEY}`,
			`${HOST}${MOVIE}/${movieId}/${CREDITS}?api_key=${API_KEY}`
		]);
	}, [movieId]);

	return { movie, directors, actors, loading, error };
};
