import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
	StyledSearchBar,
	StyledSearchBarContent
} from "../styles/StyledSearchBar";

const SearchBar = () => {
	const [inputValue, setInputValue] = useState("");
	const [, setSearchParams] = useSearchParams();

	const onChange = e => {
		setInputValue(e.target.value);
		e.preventDefault();
	};

	const doSearch = () => {
		const searchParams = new URLSearchParams();
		if (inputValue) {
			searchParams.set("query", inputValue);
		}
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
			</StyledSearchBarContent>
		</StyledSearchBar>
	);
};
export default SearchBar;
