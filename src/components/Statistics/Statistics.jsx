import StatisticsItem from "./StatisticsItem"
import {StatisticsTitle, StatContainer, StatList} from './Statistics.styled'
import PropTypes from 'prop-types'

export default function Statistics({title, stats}) {
   return <StatContainer className="statistics">
  <StatisticsTitle className="title">{title}</StatisticsTitle>

  <StatList className="stat-list">
    {stats.map(item => <StatisticsItem key={item.id} label={item.label} percentage={item.percentage} />
    )}
  </StatList>
</StatContainer>
}

Statistics.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number.isRequired,
    })
  ),
  title: PropTypes.string,
};