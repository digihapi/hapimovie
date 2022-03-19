import * as React from "react";

const FavoritesContext = React.createContext();

// Actions
const UPDATE_FAVORITES = "updateFavorites";

function favoritesReducer(state, action) {
	switch (action.type) {
		case UPDATE_FAVORITES: {
			localStorage.setItem("FAVORITES", JSON.stringify(action.payload));
			return { favorites: action.payload };
		}
		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
}

function FavoritesProvider({ children }) {
	const [state, dispatch] = React.useReducer(favoritesReducer, {
		favorites: JSON.parse(localStorage.getItem("FAVORITES") || "") || {}
	});
	const value = { state, dispatch };
	return (
		<FavoritesContext.Provider value={value}>
			{children}
		</FavoritesContext.Provider>
	);
}

function useFavorites() {
	const context = React.useContext(FavoritesContext);
	if (context === undefined) {
		throw new Error("useFavorites must be used within a FavoritesProvider");
	}
	return context;
}

export { FavoritesProvider, useFavorites, UPDATE_FAVORITES };
