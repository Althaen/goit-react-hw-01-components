import styled from 'styled-components'

export const TransactionTable = styled.table`
width: 400px;
margin-top: 40px;
box-shadow: 0px 3px 4px 0px rgba(34, 60, 80, 0.2);
border-radius: 5px;
margin-left: auto;
margin-right: auto;
margin-bottom: 50px;

`

export const TransactionTableHead = styled.thead`
background-color: turquoise;
color: #FFF;
height: 20px;
text-transform: uppercase;
`

export const Transaction = styled.tr`
text-align: center;
background-color: #FFF;
&:nth-child(2n) {background-color: #DDD}
color: #555555;
`