import {
  fireEvent,
  render,
  waitForElementToBeRemoved,
  within,
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
    remove.mockResolvedValue(null);

    get.mockResolvedValue([{ _id: '1', value: 'Abend' }, { _id: '2', value: 'Tor' }]);

    const { queryByText, findByText } = render(<TermList />);

    const listItem = (await findByText('Abend')).closest('li');
    expect(listItem).toBeInTheDocument();

    const removeButton = within(listItem!).getByText('X');
    fireEvent.click(removeButton);

    expect(remove).toHaveBeenCalledWith('/jank/terms/1');
    await waitForElementToBeRemoved(() => queryByText('Abend'));
  });
});
