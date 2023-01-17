import { Comment } from '../../types/comment';
import Review from '../review/review';

type ReviewProps = {
  comments: Comment[];
};

function Reviews({ comments }: ReviewProps) {
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {comments.slice(0, Math.ceil(comments.length / 2)).map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
      <div className="film-card__reviews-col">
        {comments.slice(Math.ceil(comments.length / 2)).map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
