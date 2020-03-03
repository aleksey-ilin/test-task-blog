import React from 'react';
import { render } from '@testing-library/react';
import Header from './Header';
import '@testing-library/jest-dom';

test('renders logo', () => {
  const { getByAltText } = render(<Header />);
  const logo = getByAltText('logo');
  expect(logo).toBeInTheDocument();
});
