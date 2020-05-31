import React from 'react';
import Term from './Term';
import useApi from '../../hooks/useApi';
import { AddButton, AddLabel, TermInput } from './ui';

type Terms = {
  _id: string,
  value: string
}

const TermList = () => {
  const [error, terms] = useApi<Terms[]>('/jank/terms');

  if (error) {
    return <span>Begriffe konnten leider nicht geladen werden</span>;
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
          <Term key={_id} value={value} />
        ))}
      </ul>
    </>
  );
};

export default TermList;