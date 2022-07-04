import css  from "./Statistics.module.css"
export const Statistics = ({ collection }) => {
    return (
        <section className={css.statistics}>
  <h2 className={css.title}>Upload stats</h2>

  <ul className={css.statsList}>
    {collection}
  </ul>
</section>
    )
}