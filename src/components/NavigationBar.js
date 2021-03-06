import { Link, useLocation } from "react-router-dom";
import TMDBLogo from "../assets/images/tmdb.svg";
import { StyledNavigationBar } from "../styles/StyledNavigationBar";
import constants from "../config/constants";

const NavigationBar = ({ movie }) => {
	const location = useLocation();
	const { HOME, WATCH_LIST } = constants.APP.PATH;
	const { DEFAULT_YEAR } = constants.API;

	return (
		<StyledNavigationBar>
			<div className="navigation">
				<Link to={`${HOME}?primary_release_year=${DEFAULT_YEAR}`}>
					<i
						className={`fa fa-home fa-2x ${
							location.pathname === HOME ? "current" : ""
						}`}
					/>
					<span className={location.pathname === HOME ? "current" : ""}>
						Home
					</span>
				</Link>
				<Link to={WATCH_LIST}>
					<i
						className={`fa fa-eye fa-2x ${
							location.pathname === WATCH_LIST ? "current" : ""
						}`}
					/>
					<span className={location.pathname === WATCH_LIST ? "current" : ""}>
						WatchList
					</span>
				</Link>
				{movie && (
					<Link to="#">
						<i
							className={`fa fa-info-circle fa-2x ${
								location.pathname !== HOME && location.pathname !== WATCH_LIST
									? "current"
									: ""
							}`}
						/>
						<span
							className={
								location.pathname !== HOME && location.pathname !== WATCH_LIST
									? "current"
									: ""
							}
						>
							{movie.title}
						</span>
					</Link>
				)}
			</div>
			<img src={TMDBLogo} alt="TMDB logo" />
		</StyledNavigationBar>
	);
};
export default NavigationBar;
