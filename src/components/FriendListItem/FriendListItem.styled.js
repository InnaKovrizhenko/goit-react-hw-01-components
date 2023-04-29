import styled from 'styled-components';

export const FriendLi = styled.li`
  display: flex;
  align-items: center;
  
  width: 350px;
  border-radius: 10px;
  background-color: #F8F8FF;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2);
  
  padding: 5px;
  margin-bottom: 15px;
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ online }) => (online ? 'green' : 'red')};
  margin-right: 10px;
`;

export const FriendName = styled.p`
  margin-left: 20px;
  font-size: 25px;
`;

