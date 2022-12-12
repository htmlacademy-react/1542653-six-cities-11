import { createSlice } from '@reduxjs/toolkit';
import { NameSpaces } from '../../const';
import { fetchReviews, sendComment } from '../api-actions';
import { ReviewProcess } from '../../types/state';

const initialState: ReviewProcess = {
  reviews: [],
  reviewErrorStatus: false,
  creationCommentErrorStatus: false,
  isCommentSent: false
};

export const reviewProcess = createSlice({
  name: NameSpaces.Review,
  initialState,
  reducers: {
    removeCommentError: (state) => {
      state.creationCommentErrorStatus = false;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state) => {
        state.reviewErrorStatus = true;
      })
      .addCase(sendComment.fulfilled, (state, action) => {
        state.isCommentSent = true;
        state.reviews = action.payload;
      })
      .addCase(sendComment.rejected, (state) => {
        state.creationCommentErrorStatus = true;
        state.isCommentSent = false;
      });
  }
});

export const { removeCommentError } = reviewProcess.actions;
