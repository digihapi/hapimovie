import { Link, useLocation } from "react-router-dom";
import TMDBLogo from "../assets/images/tmdb.svg";
import { StyledNavigationBar } from "../styles/StyledNavigationBar";
import constants from "../config/constants";

const NavigationBar = ({ movie }) => {
	const location = useLocation();
	const { HOME, WATCH_LIST } = constants.APP.PATH;

	return (
		<StyledNavigationBar>
			<div className="navigation">
				<Link to={HOME}>
					<p className={location.pathname === HOME ? "current" : ""}>Home</p>
				</Link>
				<Link to={WATCH_LIST}>
					<p className={location.pathname === WATCH_LIST ? "current" : ""}>
						Watchlist
					</p>
				</Link>
				{movie && (
					<>
						<p
							className={
								location.pathname !== HOME && location.pathname !== WATCH_LIST
									? "current"
									: ""
							}
						>
							{movie?.title}
						</p>
					</>
				)}
			</div>
			<img src={TMDBLogo} alt="TMDB logo" />
		</StyledNavigationBar>
	);
};
export default NavigationBar;
