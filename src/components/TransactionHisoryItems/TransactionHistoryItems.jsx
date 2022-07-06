import PropTypes from 'prop-types';

import css from "./TransactionHistoryItems.module.css"
export const TransactionHistoryItem = ({ item }) => {
    return (<tr className="tableRow">
        <td className={css.tableData}>{item.type }</td>
        <td className={css.tableData}>{ item.amount}</td>
        <td className={css.tableData}>{item.currency }</td>
    </tr>)
}
TransactionHistoryItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    }).isRequired,
}