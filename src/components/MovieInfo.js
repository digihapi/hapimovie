import { StyledMovieInfo } from "../styles/StyledMovieInfo";
import constants from "../config/constants";
import { useState } from "react";
import { UPDATE_WATCH_LIST, useWatchList } from "../context/watchList";

const MovieInfo = ({ movie }) => {
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

	const computeTime = time => {
		const hours = Math.floor(time / 60);
		const mins = time % 60;
		return ` ${hours}h${mins < 10 ? "0" + mins : mins}`;
	};

	const {
		HOST,
		SIZE: {
			POSTER: { DEFAULT, NO_POSTER }
		}
	} = constants.IMAGE;
	return (
		<StyledMovieInfo backdrop={movie.backdrop_path}>
			<div className="movieinfo-content">
				<div className="movieinfo-thumb">
					<img
						src={
							movie.poster_path
								? `${HOST}${DEFAULT}${movie.poster_path}`
								: NO_POSTER
						}
						loading="lazy"
						alt={movie.title}
					/>
				</div>
				<div className="movieinfo-right">
					<div className="movieinfo-text">
						<h1>{movie.title}</h1>
						<p>{movie.overview}</p>
					</div>
					<div className="flex1" />
					<div className="icon-content">
						<div className="vote-content">
							<div>
								<div className="vote">{movie.vote_average}</div>
							</div>
						</div>
						<div className="time-content">
							<i className="fa fa-clock-o fa-3x" />
							<p>{computeTime(movie.runtime)}</p>
						</div>
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
			</div>
		</StyledMovieInfo>
	);
};
export default MovieInfo;
