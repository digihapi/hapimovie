import { createContext, useContext, useReducer } from "react";

const WatchListContext = createContext();

// Actions
const UPDATE_WATCH_LIST = "updateWatchList";

const WATCH_LIST_KEY = "WATCH_LIST_V2";

function watchListReducer(state, action) {
	switch (action.type) {
		case UPDATE_WATCH_LIST: {
			localStorage.setItem(WATCH_LIST_KEY, JSON.stringify(action.payload));
			return { watchList: action.payload };
		}
		default: {
			throw new Error(`Unhandled action type: ${action.type}`);
		}
	}
}

function WatchListProvider({ children }) {
	const [state, dispatch] = useReducer(watchListReducer, {
		watchList: JSON.parse(localStorage.getItem(WATCH_LIST_KEY) || "[]")
	});
	const value = { state, dispatch };
	return (
		<WatchListContext.Provider value={value}>
			{children}
		</WatchListContext.Provider>
	);
}

function useWatchList() {
	const context = useContext(WatchListContext);
	if (context === undefined) {
		throw new Error("useWatchList must be used within a WatchListProvider");
	}
	return context;
}

export { WatchListProvider, useWatchList, UPDATE_WATCH_LIST };
