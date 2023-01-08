import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import CommentHelp from './comment-help';

describe('Component: CommentHelp', () => {
  it('should have to render correctly', () => {
    render(
      <HelmetProvider>
        <CommentHelp />
      </HelmetProvider>
    );

    const helpMesssage = 'To submit review please make sure to set rating and describe your stay with at least 50 characters';

    expect(screen.getAllByText(helpMesssage)).toBeInTheDocument();

  });
});
