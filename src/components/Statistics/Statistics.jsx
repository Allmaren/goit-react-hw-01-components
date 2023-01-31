import styles from './statistics.module.css';
import PropTypes from 'prop-types';
import { getRandomHexColor } from './Random_Color';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statlist}>
        {stats.map(stat => (
          <li
            key={stat.id}
            className={styles.item}
            style={{
              backgroundColor: getRandomHexColor(),
              color: getRandomHexColor(),
            }}
          >
            <span className={styles.label}>{stat.label}</span>
            <span className={styles.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  items: [],
};

Statistics.propType = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
