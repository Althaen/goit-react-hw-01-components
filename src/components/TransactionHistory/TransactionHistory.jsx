// import TransactionItem from './TransactionItem';
import { TransactionTable, TransactionTableHead, Transaction } from './TransactionHistory.styled';
import PropTypes from 'prop-types'

export default function TransactionHistory({ items }) {
  return <TransactionTable className="transaction-history">
      <TransactionTableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TransactionTableHead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <Transaction>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </Transaction>
          )
        })}
      </tbody>
    </TransactionTable>
  
}
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};