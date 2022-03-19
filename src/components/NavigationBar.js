import { Link, useLocation } from "react-router-dom";
import TMDBLogo from "../assets/images/tmdb.svg";
import { StyledNavigationBar } from "../styles/StyledNavigationBar";

const NavigationBar = ({ movie }) => {
	const location = useLocation();
	return (
		<StyledNavigationBar>
			<div className="navigation">
				<Link to="/">
					<p className={location.pathname === "/" && "current"}>Home</p>
				</Link>
				<Link to="/favorites">
					<p className={location.pathname === "/favorites" && "current"}>
						Favorites
					</p>
				</Link>
				{movie && (
					<>
						<p
							className={
								location.pathname !== "/" &&
								location.pathname !== "/favorites" &&
								"current"
							}
						>
							{movie}
						</p>
					</>
				)}
			</div>
			<img src={TMDBLogo} alt="TMDB logo" />
		</StyledNavigationBar>
	);
};
export default NavigationBar;
