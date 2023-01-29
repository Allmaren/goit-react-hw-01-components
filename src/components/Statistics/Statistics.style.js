import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const List = styled.li`
  width: 80px;
  text-align: center;
  color: getRandomHexColor();
  padding: 20px;

  display: flex;
  flex-direction: column;
  border: 1px solid #000;

  background-color: ${getRandomHexColor()};
`;
