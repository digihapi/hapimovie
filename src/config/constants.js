const constants = {
	APP: {
		PATH: {
			HOME: "/",
			WATCH_LIST: "/watchlist",
			MOVIE_DETAILS: "/details/:id"
		}
	},
	API: {
		DEFAULT_YEAR: "1999",
		HOST: "https://api.themoviedb.org/3",
		API_KEY:
			process.env.REACT_APP_API_KEY || "0c7cee06c7d925a997b4129b84072f51",
		PATHS: {
			SEARCH: "/search",
			MOVIE: "/movie",
			DISCOVER: "/discover",
			CREDITS: "/credits",
			REVIEWS: "/reviews"
		}
	},
	IMAGE: {
		HOST: "https://image.tmdb.org/t/p/",
		SIZE: {
			POSTER: {
				DEFAULT: "w500",
				NO_POSTER: "https://dummyimage.com/500x750/eeeeee/999999&text=No+poster"
			},
			BACKDROP: {
				DEFAULT: "w1280",
				NO_POSTER:
					"https://dummyimage.com/1280x720/eeeeee/999999&text=No+poster"
			}
		}
	}
};

export default constants;
