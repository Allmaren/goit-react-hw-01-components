import styles from './statistics.module.css';
import PropTypes from 'prop-types';
import { getRandomHexColor } from './Random_Color';

export const Statistics = ({ title, stats }) => {
  const titleElement = title && <h2 className={styles.title}>Upload stats</h2>;
  const alertStyles = {
    backgroundColor: getRandomHexColor(),
    color: getRandomHexColor(),
  };
  const elements = stats.map(stat => (
    <li key={stat.id} className={styles.item} style={alertStyles}>
      <span className={styles.label}>{stat.label}</span>
      <span className={styles.percentage}>{stat.percentage}</span>
    </li>
  ));

  return (
    <section className={styles.statistics}>
      {titleElement}
      <ul className={styles.statlist}>{elements}</ul>
    </section>
  );
};

Statistics.defaultProps = { title: 'Upload stats' };

Statistics.propType = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
