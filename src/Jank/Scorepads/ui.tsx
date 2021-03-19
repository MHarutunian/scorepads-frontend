import styled from 'styled-components';

export const Frame = styled.div`
  margin: 10px;
  padding: 10px 20px;
  border-radius: 3px;
  border: 2px solid grey;
`;

export const Text = styled.span`
  margin: 5px 30px 5px 5px;
`;

const Button = styled.button`
  margin: 5px;
  padding: 5px 10px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid black;
`;

export const LoadButton = styled(Button)`
  color: green;
`;

export const DeleteButton = styled(Button)`
  color: red;
`;

export const ErrorText = styled.span`
  color: red;
  font-weight: bold;
`;
