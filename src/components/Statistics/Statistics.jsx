import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils/getRandomColor';
import css from './Statistics.module.css';
export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statsList}>{statsCollection(stats)}</ul>
    </section>
  );
};

function statsCollection(statsData) {
  return statsData.map(statsItem => {
    const backgroundColor = getRandomHexColor();
    return (
      <li
        className={css.item}
        key={statsItem.id}
        style={{
          backgroundColor: `${backgroundColor}`,
        }}
      >
        <span className={css.label}>{statsItem.label}</span>
        <span className={css.percentage}>{statsItem.percentage}%</span>
      </li>
    );
  });
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
