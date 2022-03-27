import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import constants from "../config/constants";
import {
	StyledSearchBar,
	StyledSearchBarContent
} from "../styles/StyledSearchBar";

const SearchBar = () => {
	const [inputValue, setInputValue] = useState("");
	const [searchParams, setSearchParams] = useSearchParams();

	const onChange = e => {
		setInputValue(e.target.value);
		e.preventDefault();
	};

	useEffect(() => {
		setInputValue(searchParams.get("query") || "");
	}, [searchParams]);

	const doSearch = () => {
		const searchParams = new URLSearchParams();
		if (inputValue) {
			searchParams.set("query", inputValue);
		}
		setSearchParams(searchParams);
	};

	const clearSearch = () => {
		const { DEFAULT_YEAR } = constants.API;
		const searchParams = new URLSearchParams();
		searchParams.set("primary_release_year", DEFAULT_YEAR);
		setInputValue("");
		setSearchParams(searchParams);
	};

	const onKeyPress = e => {
		if (e.key === "Enter") doSearch();
	};

	return (
		<StyledSearchBar>
			<StyledSearchBarContent>
				<i className="fa fa-search fa-2x" />
				<input
					type="text"
					placeholder="Search movie..."
					onChange={onChange}
					value={inputValue}
					onKeyPress={onKeyPress}
				/>
				{inputValue && (
					<i className="fa fa-times fa-2x" onClick={clearSearch} />
				)}
			</StyledSearchBarContent>
		</StyledSearchBar>
	);
};
export default SearchBar;
