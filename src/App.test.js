import { render, screen } from '@testing-library/react';
import App from './App';
// import AppT from './AppT';

test('renders learn react link', () => {
  render(<App />);
  // render(<AppT />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
