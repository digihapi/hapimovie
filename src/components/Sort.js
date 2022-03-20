import { StyledSort } from "../styles/StyledSort";
import { useSearchParams } from "react-router-dom";

const Sort = () => {
	const [searchParams, setSearchParams] = useSearchParams();

	const onClick = (e, sortBy) => {
		const sortByPrefix = sortBy.substring(0, sortBy.indexOf("."));
		searchParams.delete("page");
		if (sortBy === "default") {
			searchParams.delete("sort_by");
		} else if (searchParams.get("sort_by")?.startsWith(sortByPrefix)) {
			if (searchParams.get("sort_by")?.endsWith(".desc")) {
				searchParams.set("sort_by", `${sortByPrefix}.asc`);
			} else {
				searchParams.set("sort_by", `${sortByPrefix}.desc`);
			}
		} else {
			searchParams.set("sort_by", `${sortBy}`);
		}
		setSearchParams(searchParams);
		e.preventDefault();
	};

	return (
		<StyledSort>
			<div className="sort-container">
				<p>{"]"}</p>
				<p
					className={
						searchParams.get("sort_by")?.startsWith("vote_average")
							? "current clickable"
							: "clickable"
					}
					onClick={e => onClick(e, "vote_average.desc")}
				>
					Vote average
				</p>
				<p
					className={
						searchParams.get("sort_by")?.startsWith("primary_release_date")
							? "current clickable"
							: "clickable"
					}
					onClick={e => onClick(e, "primary_release_date.asc")}
				>
					Release date
				</p>
				<p
					className={searchParams.get("sort_by") ? "clickable" : "current"}
					onClick={e => onClick(e, "default")}
				>
					Default
				</p>
				<p>{"Sort by ["}</p>
			</div>
		</StyledSort>
	);
};
export default Sort;
