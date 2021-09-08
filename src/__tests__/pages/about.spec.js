import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import AboutPage from '../../pages/About';

describe("About page", () => {
  it('should render the About page', () => {
    render(<BrowserRouter><AboutPage /></BrowserRouter>);
    const aboutPageElement = screen.getByTestId('page-about');
    expect(aboutPageElement).toBeInTheDocument();
    expect(aboutPageElement).toHaveTextContent('About');
  });
});
