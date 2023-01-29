import styles from './transaction.module.css';
import PropTypes from 'prop-types';

export const Transaction = ({ items }) => {
  const item = items.map(item => (
    <tbody key={item.id}>
      <tr>
        <td>{item.type}</td>
        <td>{item.amount}</td>
        <td>{item.currency}</td>
      </tr>
    </tbody>
  ));
  return (
    <table className={styles.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {item}
    </table>
  );
};

Transaction.defaultProp = {
  items: [],
};

Transaction.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
