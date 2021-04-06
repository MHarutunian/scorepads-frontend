import {
  fireEvent,
  render,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import ScorepadList from '../ScorepadList';
import * as ApiService from '../../../services/api.service';

const get = jest.spyOn(ApiService, 'get');

describe('Scorepad', () => {
  const renderWithRouter = () => render(<ScorepadList />, { wrapper: MemoryRouter });

  beforeEach(() => {
    get.mockResolvedValue([]);
  });

  it('renders header by default', async () => {
    const { findByAltText } = renderWithRouter();
    expect(await findByAltText('JanK')).toBeInTheDocument();
  });

  it('renders scorepads received from the api', async () => {
    get.mockResolvedValue([{ _id: '1', players: [{ _id: '12', name: 'Matteo', picture: '' }], created_at: '2021-02-07T16:22:55.000Z' }]);
    const { findByText } = renderWithRouter();

    const expectedDate = new Date('2021-02-07T16:22:55.000Z').toLocaleDateString();

    expect(await findByText('Matteo')).toBeInTheDocument();
    expect(await findByText(`Erstellt am: ${expectedDate}`)).toBeInTheDocument();
  });

  it('removes a scorepad from the list', async () => {
    const remove = jest.spyOn(ApiService, 'remove');
    remove.mockResolvedValue(null);

    get.mockResolvedValue([{ _id: '1', players: [{ _id: '12', name: 'Matteo', picture: '' }], created_at: '2021-02-07T16:22:55.000Z' }]);

    const { findByText } = renderWithRouter();

    const scorepadItem = (await findByText('Matteo')).closest('div');
    expect(scorepadItem).toBeInTheDocument();

    const removeButton = within(scorepadItem!).getByText('Spiel löschen');
    fireEvent.click(removeButton);

    expect(remove).toHaveBeenCalledWith('/scorepads/1');
    await waitForElementToBeRemoved(scorepadItem);
  });
});
