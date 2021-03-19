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
    get.mockResolvedValue([{ _id: '', players: [{ _id: '', name: 'Matteo', picture: '' }], createdAt: '2021-02-07T16:22:55.000Z' }]);
    const { findByText } = render(<ScorepadList />);
    const name = await findByText('Matteo');
    expect(name).toBeInTheDocument();
    const date = await findByText('07.02.2021');
    expect(date).toBeInTheDocument();
  });

  it('removes a scorepad from the list', async () => {
    const remove = jest.spyOn(ApiService, 'remove');
    remove.mockResolvedValue(null);

    get.mockResolvedValue([{ _id: '1', players: [{ _id: '', name: 'Matteo', picture: '' }], createdAt: '2021-02-07T16:22:55.000Z' }]);

    const { queryByText, findByText } = render(<ScorepadList />);

    const scorepadItem = (await findByText('Matteo')).closest('div');
    expect(scorepadItem).toBeInTheDocument();

    const removeButton = within(scorepadItem!).getByText('Spiel löschen');
    fireEvent.click(removeButton);

    expect(remove).toHaveBeenCalledWith('/scorepads/1');
    await waitForElementToBeRemoved(() => queryByText('Matteo'));
  });
});
