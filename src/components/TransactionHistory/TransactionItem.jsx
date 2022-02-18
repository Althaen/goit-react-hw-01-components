import { Transaction } from "./TransactionHistory.styled";

export default function TransactionItem({type, amount, currency}){
   return <Transaction>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </Transaction>;}
