import React from 'react';
import { DeleteButton, TermText } from './ui';

type TermProps = {
  value: string
}

const Term = ({ value } : TermProps) => (
  <li>
    <TermText>{value}</TermText>
    <DeleteButton type="button">X</DeleteButton>
  </li>
);

export default Term;
