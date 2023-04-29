import styled from 'styled-components';

export const UserProfile = styled.div`
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

  padding-top: 20px;
  margin-top: 20px;
`;

export const UserAvatar = styled.img`
  width: 200px;
  height: auto;
  border-radius: 150px;

`;

export const UserName = styled.p`
  margin-top: 15px;
  font-weight: bold;
  font-size: 30px;
`;

export const UserInfo = styled.p`
  text-align: center;
  margin-top: 15px;
  color: #3c4545;
  font-size: 20px;
  
`;

export const StatsUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  width: 100%;
  background-color: #E6E6FA;
`;

export const StatsLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #B0C4DE;
  width: 33.33%;
  height: 75px;
`;
export const Statslabel = styled.span`
  color: #3c4545;
`;

export const StatsQuantity = styled.span`
  font-weight: bold;
`;