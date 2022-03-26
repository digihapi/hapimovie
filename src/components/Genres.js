import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useGenresFetch } from "../hooks/useGenresFetch";
import { MultiSelect } from "./MultiSelect";
import Spinner from "./Spinner";

export const Genres = () => {
	const { loading, error, genres } = useGenresFetch();
	const [searchParams, setSearchParams] = useSearchParams();
	const [defaultValue, setDefaultValue] = useState([]);

	useEffect(() => {
		if (genres.length) {
			const withGenres = searchParams.get("with_genres");
			if (withGenres) {
				setDefaultValue(
					withGenres.split(",").map(id => ({
						value: id,
						label: genres.find(genre => genre.value === parseInt(id))?.label
					}))
				);
			}
		}
	}, [genres, searchParams]);

	const onChange = values => {
		if (values?.length) {
			searchParams.set(
				"with_genres",
				values.map(genre => genre.value)
			);
		} else {
			searchParams.delete("with_genres");
		}
		setSearchParams(searchParams);
	};

	return error ? (
		<p>An unknown error occurred...</p>
	) : loading ? (
		<Spinner />
	) : (
		<MultiSelect
			placeholder="Genres..."
			defaultValue={defaultValue}
			options={genres}
			onChange={onChange}
		/>
	);
};
