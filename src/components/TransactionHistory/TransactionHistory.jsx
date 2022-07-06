import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
import { TransactionHistoryItem } from 'components/TransactionHisoryItems/TransactionHistoryItems';
export const TransactionHistory = ({ items }) => {
  const transactionCollection = items.map(item => {
    return <TransactionHistoryItem item={item} key={item.id} />;
  });
  return (
    <table className={css.transactionHistory}>
      <thead className={css.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={css.tableBody}>{transactionCollection}</tbody>
    </table>
  );
};
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
