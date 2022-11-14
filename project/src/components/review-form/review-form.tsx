import { ChangeEvent, Fragment, useState } from 'react';

const ratingStars = [
  '10',
  '9',
  '8',
  '7',
  '6',
  '5',
  '4',
  '3',
  '2',
  '1',
] as const;

function ReviewForm() {
  const [rating, setRating] = useState<typeof ratingStars[number] | null>(null);
  const [review, setReview] = useState('');

  const handleRatingChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setRating(evt.target.value as typeof ratingStars[number]);
  };

  const handleReviewChange = (evt: ChangeEvent<HTMLTextAreaElement>) => {
    setReview(evt.target.value);
  };

  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
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
                <label className="rating__label" htmlFor={`star-${ratingStar}`}>
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
          />
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">
              Post
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ReviewForm;
