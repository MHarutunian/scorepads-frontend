import React, { useEffect, useReducer } from 'react';

import useApi from '../../hooks/useApi';
import reducer from './reducer';
import TermItem from './Term';
import { Term } from './types';
import {
  AddButton,
  AddLabel,
  ErrorText,
  TermInput,
} from './ui';
import { setTerms } from './actions';

const TermList = () => {
  const [error, apiTerms] = useApi<Term[]>('/jank/terms');
  const [terms, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    if (apiTerms !== null) {
      dispatch(setTerms(apiTerms));
    }
  }, [apiTerms]);

  if (error) {
    return <ErrorText>Begriffe konnten leider nicht geladen werden</ErrorText>;
  }
  return (
    <>
      <h1>Begriffe verwalten</h1>
      <form>
        <AddLabel>
          Begriff hinzufügen:
          <TermInput type="text" name="term" />
        </AddLabel>
        <AddButton type="submit">+</AddButton>
      </form>
      <ul>
        {terms && terms.map(({ _id, value }) => (
          <TermItem key={_id} id={_id} value={value} dispatch={dispatch} />
        ))}
      </ul>
    </>
  );
};

export default TermList;
