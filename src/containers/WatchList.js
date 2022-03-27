import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import GoToTop from "../components/GoToTop";
import MovieCardInfo from "../components/MovieCardInfo";
import Movies from "../components/Movies";
import NavigationBar from "../components/NavigationBar";
import { UPDATE_WATCH_LIST, useWatchList } from "../context/watchList";
import useWindowDimensions from "../hooks/useWindowDimension";

const WatchList = () => {
	const {
		state: { watchList },
		dispatch
	} = useWatchList();
	const { width } = useWindowDimensions();

	const handleDragEnd = result => {
		const movie = watchList[result.source.index];
		watchList.splice(result.source.index, 1);
		watchList.splice(result.destination.index, 0, movie);
		dispatch({
			type: UPDATE_WATCH_LIST,
			payload: watchList
		});
	};

	return (
		<>
			<NavigationBar />
			<DragDropContext onDragEnd={handleDragEnd}>
				<Droppable
					droppableId="droppable"
					direction={width < 500 ? "vertical" : "horizontal"}
				>
					{droppableProvided => (
						<div
							ref={droppableProvided.innerRef}
							{...droppableProvided.droppableProps}
						>
							<Movies
								marginTop={true}
								header={
									watchList?.length > 0 ? "My watch list" : "No watch list"
								}
							>
								{watchList &&
									watchList?.length > 0 &&
									watchList.map((movie, index) => (
										<Draggable
											key={movie.id}
											index={index}
											draggableId={"" + movie.id}
										>
											{draggableProvided => (
												<div
													ref={draggableProvided.innerRef}
													{...draggableProvided.draggableProps}
													{...draggableProvided.dragHandleProps}
												>
													<MovieCardInfo movie={movie} />
													{draggableProvided.placeholder}
												</div>
											)}
										</Draggable>
									))}
								{droppableProvided.placeholder}
								<GoToTop />
							</Movies>
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</>
	);
};

export default WatchList;
