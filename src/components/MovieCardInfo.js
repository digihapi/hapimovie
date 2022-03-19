import { StyledMovieCardInfo } from "../styles/StyledMovieCardInfo";
import { Link } from "react-router-dom";
import { memo, useState } from "react";
import constants from "../config/constants";
import { UPDATE_FAVORITES, useFavorites } from "../context/favorites";

const MovieCardInfo = ({ movie }) => {
	const [hover, setHover] = useState(false);
	const {
		state: { favorites },
		dispatch
	} = useFavorites();

	const switchFavorite = e => {
		if (favorites[movie.id]) {
			delete favorites[movie.id];
		} else {
			favorites[movie.id] = movie;
		}
		dispatch({
			type: UPDATE_FAVORITES,
			payload: favorites
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
						<div className="fa-heart-container">
							<i
								onClick={switchFavorite}
								onMouseEnter={() => setHover(true)}
								onMouseLeave={() => setHover(false)}
								className={`fa ${
									(favorites[movie.id] && !hover) ||
									(!favorites[movie.id] && hover)
										? "fa-heart"
										: "fa-heart-o"
								} fa-3x`}
							/>
						</div>
					</div>
					<div className="info-text">
						<h1>{movie.title}</h1>
						<h3>{new Date(movie.release_date).toLocaleDateString()}</h3>
						<div className="flex1" />
						<div className="vote-container">
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
