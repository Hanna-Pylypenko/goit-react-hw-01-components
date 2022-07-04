import css from './Statistics.module.css';
import { getRandomHexColor } from 'utils/getRandomColor';

export function statsCollection(statsData) {
  return statsData.map(statsItem => {
    const backgroundColor = getRandomHexColor();
    return (
      <li className={css.item} key={statsItem.id}
        style={{
          backgroundColor: `${backgroundColor}`}}>
        <span className={css.label}>{statsItem.label}</span>
        <span className={css.percentage}>{statsItem.percentage}%</span>
      </li>
    );
  });
}
