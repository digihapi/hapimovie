import { StyledMovieCardInfo } from "../styles/StyledMovieCardInfo";
import { Link } from "react-router-dom";
import { memo, useState } from "react";
import constants from "../config/constants";
import { UPDATE_WATCH_LIST, useWatchList } from "../context/watchList";

const MovieCardInfo = ({ movie }) => {
	const [hover, setHover] = useState(false);
	const {
		state: { watchList },
		dispatch
	} = useWatchList();

	const switchWatch = e => {
		if (watchList[movie.id]) {
			delete watchList[movie.id];
		} else {
			watchList[movie.id] = movie;
		}
		dispatch({
			type: UPDATE_WATCH_LIST,
			payload: watchList
		});
		setHover(!hover);
		e.preventDefault();
	};

	const {
		HOST,
		SIZE: {
			POSTER: { DEFAULT, NO_POSTER }
		}
	} = constants.IMAGE;

	return (
		<StyledMovieCardInfo>
			<Link to={`/details/${movie.id}`} style={{ textDecoration: "none" }}>
				<div className="info-content">
					<div className="image-content">
						<img
							src={
								movie.poster_path
									? `${HOST}${DEFAULT}${movie.poster_path}`
									: NO_POSTER
							}
							loading="lazy"
							alt={movie.title}
						/>
						<div className="fa-eye-content">
							<i
								onClick={switchWatch}
								onMouseEnter={() => setHover(true)}
								onMouseLeave={() => setHover(false)}
								className={`fa ${
									(watchList[movie.id] && !hover) ||
									(!watchList[movie.id] && hover)
										? "fa-eye"
										: "fa-eye-slash"
								} fa-3x`}
							/>
						</div>
					</div>
					<div className="info-text">
						<h1>{movie.title}</h1>
						<h3>{new Date(movie.release_date).toLocaleDateString()}</h3>
						<div className="flex1" />
						<div className="vote-content">
							<div>
								<div className="vote">{movie.vote_average}</div>
							</div>
						</div>
					</div>
				</div>
			</Link>
		</StyledMovieCardInfo>
	);
};

const MemoizedMovieCardInfo = memo(MovieCardInfo);
export default MemoizedMovieCardInfo;
