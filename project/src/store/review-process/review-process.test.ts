import { UNKNOWN_ACTION } from '../../const';
import { ReviewProcess } from '../../types/state';
import { reviewProcess, removeCommentError } from './review-process';

const initialState: ReviewProcess = {
  reviews: [],
  reviewErrorStatus: false,
  creationCommentErrorStatus: false,
  isCommentSent: false
};

describe('Reducer: review-process', () => {
  it('unknown action should have return initial state', () => {
    const unknownAction = {type: UNKNOWN_ACTION};
    expect(reviewProcess.reducer(undefined, unknownAction))
      .toEqual(initialState);
  });
  it('should remove the error state', () => {
    initialState.creationCommentErrorStatus = true;
    expect(reviewProcess.reducer(initialState, removeCommentError()))
      .toEqual({...initialState, creationCommentErrorStatus: false});
  });
});
