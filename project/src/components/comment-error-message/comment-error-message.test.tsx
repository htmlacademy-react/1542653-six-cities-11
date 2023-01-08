import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import CommentErrorMessage from './comment-error-message';

describe('Component: CommentErrorMessage', () => {
  it('should have to render correctly', () => {
    render(
      <HelmetProvider>
        <CommentErrorMessage />
      </HelmetProvider>
    );

    const message = screen.getByText('Sorry, something went wrong while submitting your comment, please try again');

    expect(message).toBeInTheDocument();
  });
});
