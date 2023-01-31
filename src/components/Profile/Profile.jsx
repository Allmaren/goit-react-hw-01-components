import PropTypes from 'prop-types';

import {
  Item,
  Description,
  Avatar,
  Name,
  TagLocal,
  Stats,
  StateList,
  Span,
} from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Item>
      <Description>
        <Avatar src={avatar} alt={tag} />
        <Name>{username}</Name>
        <TagLocal>{tag}</TagLocal>
        <TagLocal>{location}</TagLocal>
      </Description>

      <Stats>
        <StateList>
          <Span>Followers</Span>
          <Span>{stats.followers}</Span>
        </StateList>
        <StateList>
          <Span>Views</Span>
          <Span>{stats.views}</Span>
        </StateList>
        <StateList>
          <Span>Likes</Span>
          <Span>{stats.likes}</Span>
        </StateList>
      </Stats>
    </Item>
  );
};

Profile.defaultProps = {
  avatar: 'https://cdn-icons-png.flaticon.com/512/560/560216.png',
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.objectOf(PropTypes.number),
};
