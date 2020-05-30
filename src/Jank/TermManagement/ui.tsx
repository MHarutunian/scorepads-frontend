import styled from 'styled-components';

const fontSize = '20';

const Button = styled.button`
  margin: 10px;
  padding: 5px 10px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid black;
`;

export const DeleteButton = styled(Button)`
  color: red;
`;

export const AddButton = styled(Button)`
  color: green;
  font-size: ${fontSize}px;
`;

export const TermText = styled.span`
  margin-top: 10px;
  font-size: ${fontSize}px;
  text-transform: capitalize;
`;

export const TermInput = styled.input`
  font-size: 18px;
  margin: 5px;
`;

export const AddLabel = styled.label`
  padding: 5px;
  font-size: ${fontSize}px;
`;
