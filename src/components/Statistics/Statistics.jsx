import PropTypes from 'prop-types';

import css from "./Statistics.module.css"
export const Statistics = ({ title, collection }) => {
  console.log({ collection })
    return (
        <section className={css.statistics}>
        {title && (<h2 className={css.title}>{title}</h2>)}

  <ul className={css.statsList}>
    {collection}
  </ul>
</section>
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  collection: PropTypes.arrayOf(PropTypes.shape).isRequired,
}