import {
  toAmericanLocaleString,
  toSimpleISOString,
} from '../../helpers/date-formatter';
import { Comment } from '../../types/comment';

type ReviewProps = {
  review: Comment;
};

function Review({ review }: ReviewProps) {
  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{review.comment}</p>

        <footer className="review__details">
          <cite className="review__author">{review.user.name}</cite>
          <time
            className="review__date"
            dateTime={toSimpleISOString(review.date)}
          >
            {toAmericanLocaleString(review.date)}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{review.rating}</div>
    </div>
  );
}

export default Review;
