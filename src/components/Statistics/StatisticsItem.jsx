import { StatListItem, Label, Percentage } from "./Statistics.styled"

export default function StatisticsItem({label, percentage}) {
    return <StatListItem className="item">  
      <Label className="label">{label}</Label>
      <Percentage className="percentage">{percentage}%</Percentage>
    </StatListItem>}