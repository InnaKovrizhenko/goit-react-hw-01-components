import styled from 'styled-components';

export const StatisticsSection = styled.section`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 350px;
  height: auto;
  border-radius: 10px;
  background-color: #F8F8FF;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2);

  margin: 0 auto;
  margin-top: 20px;
`;

export const StatisticsTitle = styled.h2`
  text-transform: uppercase;
  color: #3c4545;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StatisticsUl = styled.ul`
  display: flex;
  width: 100%;
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatisticsLi = styled.li`
  display: block;
  width: 20%;
  flex-direction: column;
  height: 50px;
  
  background-color: ${getRandomHexColor};
`;

export const StatisticsData = styled.span`
  display: block;
  text-align: center;
  
  font-weight: 500;
  color: #FFFAFA;

  padding: 3px;
`;