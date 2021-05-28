import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ErrorText = styled.span`
  color: red;
  font-weight: bold;
`;

export const DescriptionText = styled.span`
  font-weight: bold;
  font-size: 32px;
  margin: 20px;
`;

export const PlayerGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 90%;
`;
export const Picture = styled.img`
  border-radius: 5%;
  margin-bottom: 50px;
  width: 100%;
`;

export const Card = styled(Link)`
  align-items: center;
  background: transparent;
  border: medium solid black;
  border-radius: 5%;
  color: black;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  font-size: x-large;
  justify-content: space-between;
  margin: 20px;
  padding: 0;
  text-decoration: none;
  width: 25%;
  &:hover {
    background-color: green;
  }
`;
