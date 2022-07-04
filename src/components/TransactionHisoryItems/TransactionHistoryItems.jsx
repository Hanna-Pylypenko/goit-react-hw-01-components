import PropTypes from 'prop-types';

import css from "./TransactionHistoryItems.module.css"
export const TransactionHistoryItem = ({ item }) => {
    console.log({item})
    return (<tr className="tableRow">
        <td className={css.tableData}>{item.type }</td>
        <td className={css.tableData}>{ item.amount}</td>
        <td className={css.tableData}>{item.currency }</td>
    </tr>)
}
TransactionHistoryItem.propTypes = {
    item: PropTypes.objectOf(PropTypes.string).isRequired,
}