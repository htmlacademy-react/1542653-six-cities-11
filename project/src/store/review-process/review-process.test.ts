import { ReviewProcess } from '../../types/state';
import { reviewProcess, removeCommentError } from './review-process';

const initialState: ReviewProcess = {
  reviews: [],
  reviewErrorStatus: false,
  creationCommentErrorStatus: true,
  isCommentSent: false
};

describe('Reducer: review-process', () => {
  it('should remove the error state', () => {
    expect(reviewProcess.reducer(initialState, removeCommentError()))
      .toEqual({...initialState, creationCommentErrorStatus: false});
  });
});
