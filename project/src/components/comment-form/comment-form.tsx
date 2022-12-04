import { useParams } from 'react-router-dom';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import CommentPlaceRating from '../comment-place-rating/comment-place-rating';
import CommentHelp from '../comment-help/comment-help';
import CommentErrorMessage from '../comment-error-message/comment-error-message';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { sendComment } from '../../store/api-actions';
import { getCommentErrorStatus, getCommentStatus } from '../../store/selectors';
// import { setCreationCommentErrorStatus } from '../../store/actions';
import { Limits } from '../../const';
import cn from 'classnames';
import './comment-form.css';

const CommentForm = (): JSX.Element => {
  const commentErrorStatus = useAppSelector(getCommentErrorStatus);
  const isCommentSent = useAppSelector(getCommentStatus);
  //console.log(commentErrorStatus)
  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState(0);
  const [isFormDisabled, setFormStatus] = useState(false);
  const dispatch = useAppDispatch();
  const queryParam = useParams();
  const id = Number(queryParam.id);

  const changeTextCommentHandler = (evt: ChangeEvent<HTMLTextAreaElement>) => setCommentText(evt.target.value);

  const changeRating = (evt: ChangeEvent<HTMLInputElement>) => setRating(Number(evt.target.value));

  const onSubmitHandler = (evt: FormEvent) => {
    evt.preventDefault();
    setFormStatus(true);
    dispatch(sendComment({
      offerId: id,
      comment: commentText,
      rating,
    }));
  };

  useEffect(() => {
    // console.log('effect')
    // console.log(isFormDisabled)
    // console.log(commentErrorStatus)
    if (isFormDisabled && commentErrorStatus) {
      setFormStatus(false);
    }

    if (isFormDisabled && !commentErrorStatus && isCommentSent) {
      setFormStatus(false);
      setRating(0);
      setCommentText('');
    }
  }, [isFormDisabled, commentErrorStatus, isCommentSent]);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={onSubmitHandler}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <CommentPlaceRating currentRating={rating} onChangeRatingHandler={changeRating} isDisabled={isFormDisabled} />

      <textarea
        onChange={changeTextCommentHandler}
        value={commentText}
        className={cn(
          'reviews__textarea form__textarea',
          {'reviews__textarea--error-status': commentErrorStatus}
        )}
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={isFormDisabled}
      >
      </textarea>
      <div className="reviews__button-wrapper">

        {commentErrorStatus ? <CommentErrorMessage /> : <CommentHelp />}

        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={commentText.length < Limits.MinCommentSymbols || commentText.length > Limits.MaxCommentSymbols || !rating || isFormDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
