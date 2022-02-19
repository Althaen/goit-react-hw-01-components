import {StatisticsTitle, StatContainer, StatList, StatListItem, Label, Percentage} from './Statistics.styled'
import PropTypes from 'prop-types'

export default function Statistics({title, stats}) {
   return <StatContainer className="statistics">
{title && <StatisticsTitle className="title">{title}</StatisticsTitle>}
  <StatList className="stat-list">
    {stats.map(({id, label, percentage}) => <StatListItem className="item" key={id}>  
      <Label className="label">{label}</Label>
      <Percentage className="percentage">{percentage}%</Percentage>
    </StatListItem>)}
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