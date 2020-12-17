import { render, screen } from '@testing-library/react';
import App from './App';
import Article from './Components/Forum/Article';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/forum/i);
  expect(linkElement).toBeInTheDocument();
});

// describe('Article', () => {
//   it('addition ok', () => {
//     render(<Article />);
//     expect(screen.getByText('Forum')).toBeInTheDocument();
//   });
// });
