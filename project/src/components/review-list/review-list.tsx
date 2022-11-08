import { Fragment } from 'react';
import { Review } from '../../types/reviews-type';
import ReviewItem from '../review-item/review-item';

type ReviewListProp = {
  reviews: Review[];
}

const ReviewList = ({ reviews }: ReviewListProp): JSX.Element => (
  <Fragment>
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewItem
          key={review.id}
          userName={review.user.name}
          userAvatarUrl={review.user.avatarUrl}
          comment={review.comment}
          date={review.date}
          rating={review.rating}
        />))}
    </ul>
  </Fragment>
);

export default ReviewList;
