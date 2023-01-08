import { render, screen } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';
import CityPlaceListError from './city-places-error';

describe('Component: CityPlaceListError', () => {
  it('should have to render correctly', () => {
    render(
      <HelmetProvider>
        <CityPlaceListError />
      </HelmetProvider>
    );

    const componentStatusText = screen.getByText('Network Error');
    const errorDescription = screen.getByText('Sorry, we could not get any property available from server at the moment. Please, try it again later');

    expect(componentStatusText).toBeInTheDocument();
    expect(errorDescription).toBeInTheDocument();
  });
});
