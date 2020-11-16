import React from 'react';
import {
  fireEvent,
  render,
} from '@testing-library/react';

import TermList from '../TermList';
import * as ApiService from '../../../services/api.service';

const get = jest.spyOn(ApiService, 'get');

describe('TermList', () => {
  beforeEach(() => {
    get.mockResolvedValue([]);
  });

  it('renders header by default', async () => {
    const { findByText } = render(<TermList />);
    expect(await findByText('Begriff hinzufügen:')).toBeInTheDocument();
  });

  it('renders terms received from the api', async () => {
    get.mockResolvedValue([{ _id: '', value: 'Tor' }]);
    const { findByText } = render(<TermList />);
    const term = await findByText('Tor');
    expect(term).toBeInTheDocument();
  });

  it('adds a term to the list', async () => {
    const post = jest.spyOn(ApiService, 'post');
    post.mockResolvedValue({ _id: '1', value: 'Abend' });

    const { findByText, findByLabelText } = render(<TermList />);

    const input = await findByLabelText('Begriff hinzufügen:');
    fireEvent.change(input, { target: { value: 'Abend' } });

    const addButton = await findByText('+');
    fireEvent.click(addButton);

    expect(post).toHaveBeenCalledWith('/jank/terms', { value: 'Abend' });
    expect(await findByText('Abend')).toBeInTheDocument();
  });

  it('removes a term from the list', async () => {
    const remove = jest.spyOn(ApiService, 'remove');
    remove.mockResolvedValue([{ _id: '2', value: 'Tor' }]);

    get.mockResolvedValue([{ _id: '1', value: 'Abend' }, { _id: '2', value: 'Tor' }]);

    const { findByText, findAllByText } = render(<TermList />);

    const removeButtons = await findAllByText('X');
    fireEvent.click(removeButtons[0]);

    expect(remove).toHaveBeenCalledWith('/jank/terms/1');
    expect(await findByText('Abend')).not.toBeInTheDocument();
  });
});
