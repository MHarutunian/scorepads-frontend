import {
  fireEvent,
  render,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react';

import ScorepadList from '../ScorepadList';
import * as ApiService from '../../../services/api.service';

const get = jest.spyOn(ApiService, 'get');

describe('Scorepad', () => {
  beforeEach(() => {
    get.mockResolvedValue([]);
  });

  it('renders header by default', async () => {
    const { findByText } = render(<ScorepadList />);
    expect(await findByText('Bestehende Spiele:')).toBeInTheDocument();
  });

  it('renders scorepads received from the api', async () => {
    get.mockResolvedValue([{ _id: '1', players: [{ _id: '12', name: 'Matteo', picture: '' }], created_at: '2021-02-07T16:22:55.000Z' }]);
    const { findByText } = render(<ScorepadList />);
    expect(await findByText('Matteo')).toBeInTheDocument();
    expect(await findByText('Erstellt am: 2021-2-7')).toBeInTheDocument();
  });

  it('removes a scorepad from the list', async () => {
    const remove = jest.spyOn(ApiService, 'remove');
    remove.mockResolvedValue(null);

    get.mockResolvedValue([{ _id: '1', players: [{ _id: '12', name: 'Matteo', picture: '' }], created_at: '2021-02-07T16:22:55.000Z' }]);

    const { findByText } = render(<ScorepadList />);

    const scorepadItem = (await findByText('Matteo')).closest('div');
    expect(scorepadItem).toBeInTheDocument();

    const removeButton = within(scorepadItem!).getByText('Spiel löschen');
    fireEvent.click(removeButton);

    expect(remove).toHaveBeenCalledWith('/scorepads/1');
    await waitForElementToBeRemoved(scorepadItem);
  });
});
