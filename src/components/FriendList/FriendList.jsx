import { FriendListItem } from 'components/FriendListItem/FriendListItem';

import { FriendUl } from './FriendList.styled';

import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
        <FriendUl>
        {friends.map(el => (
        <FriendListItem key={el.id} friend={el}/>
        ))}
        </FriendUl>

    );
  };

  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };

