import { NameSpaces } from '../../const';
import { State } from '../../types/state';

export const getReviews = (state: State) => state[NameSpaces.Review].reviews;

export const getCommentErrorStatus = (state: State) => state[NameSpaces.Review].creationCommentErrorStatus;

export const getCommentStatus = (state: State) => state[NameSpaces.Review].isCommentSent;
