import { ChangeEvent, useState } from 'react';
import CommentPlaceRating from '../comment-place-rating/comment-place-rating';

const CommentForm = (): JSX.Element => {
  const [commentText, setCommentText] = useState('');
  const [, setRating] = useState(1);

  const changeTextCommentHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => setCommentText(evt.target.value);

  const changeRating = (evt: ChangeEvent<HTMLInputElement>) => setRating(Number(evt.target.value));
  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <CommentPlaceRating onChangeRatingHandler={changeRating} />

      <textarea
        onChange={changeTextCommentHandler}
        defaultValue={commentText}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={false}>Submit</button>
      </div>
    </form>
  );
};

export default CommentForm;
