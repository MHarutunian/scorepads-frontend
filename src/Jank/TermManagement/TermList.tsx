import { useEffect, useReducer } from 'react';

import useApi from '../../hooks/useApi';
import reducer from './reducer';
import TermItem from './Term';
import { Term } from './types';
import { ErrorText } from './ui';
import { setTerms } from './actions';
import AddTermForm from './AddTermForm';
import Header from './Header';

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
      <Header />
      <AddTermForm dispatch={dispatch} />
      <ul>
        {terms && terms.map(({ _id, value }) => (
          <TermItem key={_id} id={_id} value={value} dispatch={dispatch} />
        ))}
      </ul>
    </>
  );
};

export default TermList;
