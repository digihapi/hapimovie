import { useState, useEffect } from "react";
import constants from "../config/constants";

export const useGenresFetch = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		const {
			HOST,
			API_KEY,
			PATHS: { MOVIE, GENRE, LIST }
		} = constants.API;

		const fetchGenres = async () => {
			setError(null);
			setLoading(true);
			try {
				const result = await (
					await fetch(`${HOST}${GENRE}${MOVIE}${LIST}?api_key=${API_KEY}`)
				).json();
				setGenres(
					result?.genres.map(genre => ({ value: genre.id, label: genre.name }))
				);
			} catch (error) {
				setError(error);
			}
			setLoading(false);
		};

		fetchGenres();
	}, []);

	return { loading, error, genres };
};
