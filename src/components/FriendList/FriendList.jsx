import FriendsItem from './FriendsItem';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  const friend = friends.map(item => (
    <FriendsItem
      key={item.id}
      avatar={item.avatar}
      name={item.name}
      isOnline={item.isOnline}
    />
  ));
  return <ul className={styles.friendList}>{friend}</ul>;
};

FriendList.defaultProps = {
  items: [],
};

FriendList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
