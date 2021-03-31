import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Frame = styled.div`
  margin: 10px;
  padding: 10px 20px;
  border-radius: 3px;
  border: 2px solid grey;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export const Text = styled.span`
  margin: 5px 30px 5px 5px;
`;

const buttonStyles = css`
  margin: 5px;
  padding: 5px 10px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid black;
`;

export const LoadButton = styled(Link)`
  ${buttonStyles}
  color: green;
  text-decoration: none;
`;

export const DeleteButton = styled.button`
  ${buttonStyles}
  color: red;
`;

export const ErrorText = styled.span`
  color: red;
  font-weight: bold;
`;

export const Picture = styled.img`
  width: 50px;
  vertical-align: middle;
  border-radius: 50%;
`;
