import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { Transaction } from './Transaction/TransactionHistory';

import user from '../data/user.json';
import friends from '../data/friends.json';
import data from '../data/data.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <Transaction items={transactions} />
    </>
  );
};
