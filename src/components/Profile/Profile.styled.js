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

export const Description = styled.div`
  padding: 10px;
  background: ${getRandomHexColor()};
  border-radius: 8px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
`;

export const Name = styled.p`
  font-size: 35px;
  color: #0c0c0c;
`;

export const TagLocal = styled.p`
  font-size: 25px;
  color: #0c0c0c;
`;

export const Stats = styled.ul`
  font-size: larger;
  font-style: italic;
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 10px;
  border-radius: 8px;
  background: ${getRandomHexColor()};
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
`;

export const StateList = styled.li`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Span = styled.span`
  color: #122ee5;
`;
