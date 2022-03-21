import { StyledReview } from "../styles/StyledReview";

const Review = ({ review }) => {
	return (
		<StyledReview>
			<div className="author">
				<div className="vote-content">
					<div>
						<div className="vote">{review?.author_details?.rating}</div>
					</div>
				</div>
				<div className="column">
					<span>{review.author}</span>
					<span>{new Date(review.created_at).toLocaleString()}</span>
				</div>
			</div>
			<p>{review.content}</p>
		</StyledReview>
	);
};
export default Review;
