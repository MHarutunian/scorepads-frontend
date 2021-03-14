import { useState, useCallback } from 'react';
import { post } from '../../services/api.service';
import { addTerm } from './actions';
import useErrorHandler from '../../hooks/useErrorHandler';
import {
  AddButton, AddLabel, TermInput, ErrorText,
} from './ui';
import { TermAction } from './types';

type AddTermFormProps = {
  dispatch: (action: TermAction) => void
}

const AddTermForm = ({ dispatch }: AddTermFormProps) => {
  const [termInput, setTermInput] = useState('');
  const callback = useCallback(async () => {
    const term = await post('/jank/terms', { value: termInput });
    dispatch(addTerm(term));
    setTermInput('');
  }, [dispatch, termInput]);
  const [error, onSubmit] = useErrorHandler(callback);

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      onSubmit();
    }}
    >
      <AddLabel>
        Begriff hinzufügen:
        <TermInput
          required
          value={termInput}
          onChange={(event) => setTermInput(event.target.value)}
          type="text"
          name="term"
        />
      </AddLabel>
      <AddButton type="submit">+</AddButton>
      {error && <ErrorText>Begriff konnte nicht hinzugefügt werden</ErrorText>}
    </form>
  );
};

export default AddTermForm;
