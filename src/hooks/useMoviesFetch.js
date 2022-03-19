import { useState, useEffect } from "react";
import constants from "../config/constants";

export const useMoviesFetch = () => {
	const [movies, setMovies] = useState([]);
	const [page, setPage] = useState(1);
	const [haveNextPage, setHaveNextPage] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

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

	const fetchMoviesFrom1999 = (page = 1) => {
		fetchMovies(
			`${HOST}${DISCOVER}${MOVIE}?primary_release_year=1999&include_adult=false&page=${page}&api_key=${API_KEY}`,
			page
		);
	};

	const fetchMoviesSortedByVote = (page = 0) => {
		fetchMovies(
			`${HOST}${DISCOVER}${MOVIE}?primary_release_year=1999&include_adult=false&sort_by=vote_average.desc&vote_count.gte=50&api_key=${API_KEY}`
		);
	};

	const nextPage = e => {
		fetchMovies(
			`${HOST}${DISCOVER}${MOVIE}?primary_release_year=1999&include_adult=false&page=${
				page + 1
			}&api_key=${API_KEY}`,
			page + 1
		);
		e.preventDefault();
	};

	useEffect(() => {
		// By default fetch movies from 1999
		fetchMoviesFrom1999();
	}, []);

	return [{ movies, loading, error, haveNextPage }, nextPage];
};
