import React from 'react';
import {
  fireEvent,
  render,
} from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders header by default', () => {
    const { getByText } = render(<App />);
    expect(getByText('Scorepads')).toBeInTheDocument();
  });

  it('renders user management when switching to it', () => {
    const { getByText } = render(<App />);

    const userManagementLink = getByText('Spielerverwaltung');
    fireEvent.click(userManagementLink);

    expect(getByText('List')).toBeInTheDocument();
  });

  it('renders Doppelkopf page when switching to it', () => {
    const { getByText } = render(<App />);

    const doppelkopfLink = getByText('Doppelkopf');
    fireEvent.click(doppelkopfLink);

    expect(getByText('TODO')).toBeInTheDocument();
  });

  it('renders JanK page when switching to it', () => {
    const { getByText } = render(<App />);

    const jankLink = getByText('JanK');
    fireEvent.click(jankLink);

    expect(getByText('TODO')).toBeInTheDocument();
  });
});
