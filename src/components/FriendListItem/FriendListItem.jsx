import { 
  FriendLi, 
  FriendStatus, 
  FriendName, 
} from './FriendListItem.styled';

import PropTypes from 'prop-types';

export const FriendListItem = ({ friend: {avatar, name, isOnline}}) => {
    return <FriendLi>
    <FriendStatus online={isOnline}>{isOnline}</FriendStatus>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <FriendName>{name}</FriendName>
  </FriendLi>
}

FriendListItem.propTypes = {
  friend: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
};



