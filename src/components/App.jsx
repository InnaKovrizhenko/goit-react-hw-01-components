import user from 'jsons/user.json';
import { Profile } from 'components/Profile/Profile';

import data from 'jsons/data.json';
import { Statistics } from 'components/Statistics/Statistics';

import friends from 'jsons/friends.json';
import { FriendList } from 'components/FriendList/FriendList';

import transactions from 'jsons/transactions.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
    className="App">
      <Profile 
              username={user[0].username}
              tag={user[0].tag}
              location={user[0].location}
              avatar={user[0].avatar}
              stats={user[0].stats} 
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />
    </div>
  );
};
