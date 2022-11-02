import { getPercent, getHuminizeDate, getMachineDate } from '../../util';
type RewiewItemProp = {
  userName: string;
  userAvatarUrl: string;
  comment: string;
  date: string;
  rating: number;
}

const ReviewItem = ({userName, userAvatarUrl, comment, date, rating}: RewiewItemProp): JSX.Element => (
  <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={userAvatarUrl} width="54" height="54" alt="Reviews avatar" />
      </div>
      <span className="reviews__user-name">
        {userName}
      </span>
    </div>
    <div className="reviews__info">
      <div className="reviews__rating rating">
        <div className="reviews__stars rating__stars">
          <span style={{ width: getPercent(rating) }}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <p className="reviews__text">
        {comment}
      </p>
      <time className="reviews__time" dateTime={getMachineDate(date)}>{getHuminizeDate(date)}</time>
    </div>
  </li>
);

export default ReviewItem;
