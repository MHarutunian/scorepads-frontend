import { useCallback } from 'react';

import useErrorHandler from '../../hooks/useErrorHandler';
import { remove } from '../../services/api.service';
import { TermAction } from './types';
import { DeleteButton, TermText, ErrorText } from './ui';
import { deleteTerm } from './actions';

type TermProps = {
  id: string,
  value: string,
  dispatch: (action: TermAction) => void
}

const Term = ({ id, value, dispatch }: TermProps) => {
  const callback = useCallback(async () => {
    await remove(`/jank/terms/${id}`);
    dispatch(deleteTerm(id));
  }, [dispatch, id]);
  const [error, onClick] = useErrorHandler(callback);

  return (
    <li>
      <TermText>{value}</TermText>
      <DeleteButton onClick={onClick} type="button">X</DeleteButton>
      {error && <ErrorText>Begriff konnte nicht gelöscht werden.</ErrorText>}
    </li>
  );
};

export default Term;
