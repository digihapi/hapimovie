import { StyledMovieCardInfo } from "../styles/StyledMovieCardInfo";
import { Link } from "react-router-dom";
import { memo } from "react";
import constants from "../config/constants";

const MovieCardInfo = ({ movie }) => {
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
							alt="Movie picture"
						/>
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
