import { Fragment } from 'react';
import { PlaceRating } from '../../const';

const CommentPlaceRating = (): JSX.Element => {
  const stars = Object.keys(PlaceRating).map((rating) => (
    <Fragment key={rating}>
      <input className="form__rating-input visually-hidden" name="rating" value={`${PlaceRating[rating]}`} id={`${PlaceRating[rating]}-stars`} type="radio" />
      <label htmlFor={`${PlaceRating[rating]}-stars`} className="reviews__rating-label form__rating-label" title={rating}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  ));
  return (
    <div className="reviews__rating-form form__rating">
      {stars}
    </div>
  );
};

export default CommentPlaceRating;

