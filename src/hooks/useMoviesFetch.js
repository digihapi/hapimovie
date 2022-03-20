import { useState, useEffect } from "react";
import constants from "../config/constants";
import { useSearchParams } from "react-router-dom";

export const useMoviesFetch = () => {
	const { DEFAULT_YEAR } = constants.API;
	const [searchParams] = useSearchParams();

	const [movies, setMovies] = useState([]);
	const [haveNextPage, setHaveNextPage] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	// By default fetch movies from 1999
	const year = searchParams.get("year") || DEFAULT_YEAR;
	const sortBy = searchParams.get("sort_by") || "";
	const page = searchParams.get("page") || 1;
	const query = searchParams.get("query");

	const fetchMovies = async (url, p = 1) => {
		setError(null);
		setLoading(true);
		try {
			const result = await (await fetch(url)).json();
			setMovies(previous =>
				p === 1 ? [...result.results] : [...previous, ...result.results]
			);
			setHaveNextPage(result.page < result.total_pages);
		} catch (error) {
			setError(error);
		}
		setLoading(false);
	};

	useEffect(() => {
		const {
			HOST,
			API_KEY,
			PATHS: { SEARCH, MOVIE, DISCOVER }
		} = constants.API;

		let url;
		if (query) {
			url = `${HOST}${SEARCH}${MOVIE}?include_adult=false&page=${page}&query=${query}&api_key=${API_KEY}`;
		} else {
			url = `${HOST}${DISCOVER}${MOVIE}?primary_release_year=${year}&include_adult=false&page=${page}&api_key=${API_KEY}`;
		}

		if (sortBy) {
			url += `&sort_by=${sortBy}&vote_count.gte=50`;
		}

		if (page > 1 && movies.length === 0) {
			(async () => {
				for (let p = 1; p <= page; p++) {
					url = `${HOST}${DISCOVER}${MOVIE}?primary_release_year=${year}&include_adult=false&page=${p}&api_key=${API_KEY}`;
					await fetchMovies(url, p);
				}
			})();
		} else {
			fetchMovies(url, page);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [year, sortBy, page, query]);

	return { movies, loading, error, haveNextPage };
};
