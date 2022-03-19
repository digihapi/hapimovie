const constants = {
	APP: {
		PATH: {
			HOME: "/",
			FAVORITES: "/favorites",
			MOVIE_DETAILS: "/details/:id"
		}
	},
	API: {
		HOST: "https://api.themoviedb.org/3",
		API_KEY: process.env.REACT_APP_API_KEY,
		PATHS: {
			POPULAR: "/popular",
			SEARCH: "/search",
			MOVIE: "/movie",
			DISCOVER: "/discover"
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
