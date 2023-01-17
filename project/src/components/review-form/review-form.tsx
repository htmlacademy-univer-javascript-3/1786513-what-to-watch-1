import { ChangeEvent, FormEvent, Fragment, useState } from 'react';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { postCommentAction } from '../../store/api-actions';
import { useParams } from 'react-router-dom';

const ratingStars = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] as const;
type RatingStars = typeof ratingStars[number];

function ReviewForm() {
  const { id } = useParams();
  const filmId = Number(id);

  const [rating, setRating] = useState<RatingStars | null>(null);
  const [review, setReview] = useState('');
  const [isFormDisabled, setIsFormDisabled] = useState(false);

  const dispatch = useAppDispatch();

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (rating && filmId) {
      setIsFormDisabled(true);
      dispatch(postCommentAction({ filmId, rating, comment: review })).finally(
        () => setIsFormDisabled(false)
      );
    }
  };

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value) as RatingStars);
  };

  const handleReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(evt.target.value);
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form" onSubmit={handleSubmit}>
        <fieldset className="add-review__fieldset" disabled={isFormDisabled}>
          <div className="rating">
            <div className="rating__stars">
              {ratingStars.map((ratingStar) => (
                <Fragment key={ratingStar}>
                  <input
                    className="rating__input"
                    id={`star-${ratingStar}`}
                    type="radio"
                    name="rating"
                    value={ratingStar}
                    checked={rating === ratingStar}
                    onChange={handleRatingChange}
                  />
                  <label
                    className="rating__label"
                    htmlFor={`star-${ratingStar}`}
                  >
                    Rating {ratingStar}
                  </label>
                </Fragment>
              ))}
            </div>
          </div>

          <div className="add-review__text">
            <textarea
              className="add-review__textarea"
              name="review-text"
              id="review-text"
              placeholder="Review text"
              value={review}
              onChange={handleReviewChange}
              minLength={50}
              maxLength={400}
            />
            <div className="add-review__submit">
              <button
                className="add-review__btn"
                type="submit"
                disabled={
                  !rating ||
                  !review ||
                  review.length < 50 ||
                  review.length > 400
                }
              >
                Post
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default ReviewForm;
