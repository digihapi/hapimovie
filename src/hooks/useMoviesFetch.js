import { useState, useEffect } from "react";
import constants from "../config/constants";
import { useSearchParams } from "react-router-dom";

export const useMoviesFetch = () => {
	const { DEFAULT_YEAR } = constants.API;
	const [searchParams] = useSearchParams();

	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [haveNextPage, setHaveNextPage] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	// By default fetch movies from 1999
	const year = searchParams.get("year") || DEFAULT_YEAR;
	const sortBy = searchParams.get("sort_by") || "";

	const {
		HOST,
		API_KEY,
		PATHS: { MOVIE, DISCOVER }
	} = constants.API;

	const fetchMovies = async (url, page) => {
		setError(null);
		setLoading(true);
		try {
			const result = await (await fetch(url)).json();
			setMovies(previous =>
				page === 1 ? [...result.results] : [...previous, ...result.results]
			);
			setPage(result.page);
			setHaveNextPage(result.page < result.total_pages);
		} catch (error) {
			setError(error);
		}
		setLoading(false);
	};

	const fetchDiscoverMovies = (page = 1) => {
		let url = `${HOST}${DISCOVER}${MOVIE}?primary_release_year=${year}&include_adult=false&page=${page}&api_key=${API_KEY}`;

		// if (sortBy.startsWith("vote_average")) {
		// } else
		if (sortBy) {
			url += `&sort_by=${sortBy}&vote_count.gte=50`;
		}
		fetchMovies(url, page);
	};

	const nextPage = e => {
		fetchDiscoverMovies(page + 1);
		e.preventDefault();
	};

	useEffect(() => {
		fetchDiscoverMovies();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [year, sortBy]);

	return [{ movies, loading, error, haveNextPage }, nextPage];
};
