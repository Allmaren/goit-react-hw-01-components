import styled from 'styled-components';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Item = styled.div`
  text-align: center;

  width: 300px;

  padding: 20px;
  margin-top: 40px;
  margin-left: auto;
  margin-right: auto;

  box-sizing: content-box;
  border-radius: 8px;
  background: ${getRandomHexColor()};

  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;
