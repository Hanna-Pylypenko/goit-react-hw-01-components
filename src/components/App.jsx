// import PropTypes from 'prop-types';
import { Profile } from './Profile/Profile';
import user from 'user.json';
import { Statistics } from './Statistics/Statistics';
import data from "data.json"
import { statsCollection } from './Statistics/collection';
import friendsList from "friends.json"
import { FriendsList } from './FriendsList/FriendsList';
import transactions from "transactions.json"
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
const userData = user;
const statsData = data
const statsDataCollection = statsCollection(statsData);
const friends = friendsList;
const transactionsData = transactions;

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
      
      <Statistics collection={statsDataCollection} /> 
      
      <FriendsList friends={friends} />

      <TransactionHistory transactions={transactionsData}/>
      
        
    </div>
  );
};
