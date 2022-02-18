import user from '../user.json';
import data from '../data.json'
import friends from './FriendList/friends.json'
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from './TransactionHistory/transactions.json'
import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList'
import { GlobalStyle } from './GlobalStyle';


export const App = () => {
  return <>
  <Statistics title="Upload stats" stats={data} key={data.id}/> 
  <Profile username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}/>
  <FriendList friends={friends} />
  <TransactionHistory items={transactions} />
  <GlobalStyle/>
  </>
  
}
