import { Link, useLocation } from "react-router-dom";
import TMDBLogo from "../assets/images/tmdb.svg";
import { StyledNavigationBar } from "../styles/StyledNavigationBar";
import constants from "../config/constants";

const NavigationBar = ({ movie }) => {
	const location = useLocation();
	const { HOME, FAVORITES } = constants.APP.PATH;

	return (
		<StyledNavigationBar>
			<div className="navigation">
				<Link to={HOME}>
					<p className={location.pathname === HOME ? "current" : ""}>Home</p>
				</Link>
				<Link to={FAVORITES}>
					<p className={location.pathname === FAVORITES ? "current" : ""}>
						Favorites
					</p>
				</Link>
				{movie && (
					<>
						<p
							className={
								location.pathname !== HOME && location.pathname !== FAVORITES
									? "current"
									: ""
							}
						>
							{movie?.original_title}
						</p>
					</>
				)}
			</div>
			<img src={TMDBLogo} alt="TMDB logo" />
		</StyledNavigationBar>
	);
};
export default NavigationBar;
