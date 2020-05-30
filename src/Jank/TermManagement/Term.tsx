import React from 'react';
import { DeleteButton, TermText } from './ui';

interface TermProps {
  value: string
}

const Term = ({ value } : TermProps) => (
  <li>
    <TermText>{value}</TermText>
    <DeleteButton>X</DeleteButton>
  </li>
);

export default Term;
