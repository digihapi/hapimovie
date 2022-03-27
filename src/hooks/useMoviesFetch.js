import { useState, useEffect } from "react";
import constants from "../config/constants";
import { useSearchParams } from "react-router-dom";

export const useMoviesFetch = () => {
	const [searchParams] = useSearchParams();

	const [movies, setMovies] = useState([]);
	const [haveNextPage, setHaveNextPage] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		const {
			HOST,
			API_KEY,
			PATHS: { SEARCH, MOVIE, DISCOVER }
		} = constants.API;

		const query = searchParams.get("query");
		const sortBy = searchParams.get("sort_by");

		const fetchMovies = async url => {
			const page = searchParams.get("page") || 1;
			setError(null);
			setLoading(true);
			try {
				const result = await (await fetch(url)).json();
				setMovies(previous =>
					page === 1 ? [...result.results] : [...previous, ...result.results]
				);
				setHaveNextPage(result.page < result.total_pages);
			} catch (error) {
				setError(error);
			}
			setLoading(false);
		};

		let url;
		if (query) {
			url = `${HOST}${SEARCH}${MOVIE}?include_adult=false&query=${query}${
				searchParams ? "&" + searchParams : ""
			}&api_key=${API_KEY}`;
		} else {
			url = `${HOST}${DISCOVER}${MOVIE}?include_adult=false${
				searchParams ? "&" + searchParams : ""
			}&api_key=${API_KEY}`;
		}

		if (sortBy) {
			url += `&vote_count.gte=50`;
		}
		fetchMovies(url);
	}, [searchParams]);

	return { movies, loading, error, haveNextPage };
};
