import {
  TransactionHistoryTable,
  TableHead,
  TableBody,
  TableRow,
} from './TransactionHistory.styled';

import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
    return (<TransactionHistoryTable>
  <TableHead>
    <TableRow>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </TableRow>
  </TableHead>

  <TableBody>
  {items.map(({ id, type, amount, currency }) => {
          return (
    <TableRow key={id}>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
    </TableRow>
              );
    })}
  </TableBody>
</TransactionHistoryTable>

)}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};