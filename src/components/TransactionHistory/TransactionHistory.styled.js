import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  margin: 0 auto;
  width: 350px;

  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2), 0 4px 6px rgba(0,0,0,0.2);
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  color: #FFFAFA;
  height: 35px;
  background-color: #00BFFF;
`;

export const TableBody = styled.tbody`
  text-align: center;
  color: #3c4545;
`;

export const TableRow = styled.tr`
  height: 30px;
  
  &:nth-child(2n) {
    background-color: #E6E6FA;
  }
`;