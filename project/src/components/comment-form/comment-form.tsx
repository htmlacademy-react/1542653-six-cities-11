import { useParams } from 'react-router-dom';
import { ChangeEvent, FormEvent, useEffect, useState, useCallback } from 'react';
import CommentPlaceRating from '../comment-place-rating/comment-place-rating';
import CommentHelp from '../comment-help/comment-help';
import CommentErrorMessage from '../comment-error-message/comment-error-message';
import { useAppDispatch, useAppSelector } from '../../hooks/store';
import { sendComment } from '../../store/api-actions';
import { getCommentErrorStatus, getCommentStatus } from '../../store/review-process/selectors';
import { removeCommentError } from '../../store/review-process/review-process';
import { Limits } from '../../const';
import cn from 'classnames';
import './comment-form.css';

const CommentForm = (): JSX.Element => {
  const commentErrorStatus = useAppSelector(getCommentErrorStatus);
  const isCommentSent = useAppSelector(getCommentStatus);
  const [commentText, setCommentText] = useState('');
  const [rating, setRating] = useState(0);
  const [isFormDisabled, setFormStatus] = useState(false);
  const dispatch = useAppDispatch();
  const queryParam = useParams();
  const id = Number(queryParam.id);

  const handleTextCommentChange = (evt: ChangeEvent<HTMLTextAreaElement>) => setCommentText(evt.target.value);

  const handleRatingChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    setRating(Number(evt.target.value));
  }, []);


  const handleFormCommentSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    setFormStatus(true);
    dispatch(sendComment({
      offerId: id,
      comment: commentText,
      rating,
    }));
  };

  useEffect(() => {
    let isComponentMounted = true;
    if (isComponentMounted && isFormDisabled && commentErrorStatus) {
      setFormStatus(false);
      setTimeout(() => {
        dispatch(removeCommentError());
      }, Limits.ErrorDeleteTimeout);
    }

    if (isComponentMounted && isFormDisabled && !commentErrorStatus && isCommentSent) {
      setFormStatus(false);
      setRating(0);
      setCommentText('');
    }
    return () => {
      isComponentMounted = false;
    };
  }, [isFormDisabled, commentErrorStatus, isCommentSent, dispatch]);

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormCommentSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>

      <CommentPlaceRating currentRating={rating} onChangeRatingHandler={handleRatingChange} isDisabled={isFormDisabled} />

      <textarea
        onChange={handleTextCommentChange}
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
