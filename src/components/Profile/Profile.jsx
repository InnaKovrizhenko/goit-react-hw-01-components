import {
  UserProfile,
  UserAvatar,
  UserName,
  UserInfo,
  StatsUl,
  StatsLi,
  Statslabel,
  StatsQuantity,
} from './Profile.styled';

import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar,  stats }) => {
    return (
    <UserProfile>
    <div>
      <UserAvatar
        src={avatar}
        alt="User avatar"
      />
      <UserName>{username}</UserName>
      <UserInfo>{tag}</UserInfo>
      <UserInfo>{location}</UserInfo>
    </div>
  
    <StatsUl>
      <StatsLi>
        <Statslabel>Followers</Statslabel>
        <StatsQuantity>{stats.followers}</StatsQuantity>
      </StatsLi>
      <StatsLi>
        <Statslabel>Views</Statslabel>
        <StatsQuantity>{stats.views}</StatsQuantity>
      </StatsLi>
      <StatsLi>
        <Statslabel>Likes</Statslabel>
        <StatsQuantity>{stats.likes}</StatsQuantity>
      </StatsLi>
    </StatsUl>
  </UserProfile>
  )};

  Profile.propTypes = {
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
          followers: PropTypes.number.isRequired,
          views: PropTypes.number.isRequired,
          likes: PropTypes.number.isRequired,
        }).isRequired,
      };

    
