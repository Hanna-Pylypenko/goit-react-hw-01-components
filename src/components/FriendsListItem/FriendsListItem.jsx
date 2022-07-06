import PropTypes from 'prop-types';
import css from './FriendsListItem.module.css';
export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.friendItem}>
      <div className={css.onlineOfflineMarker}>
        <span
          className={isOnline ? css.isOnlineMarker : css.isOfflineMarker}
        ></span>
      </div>

      <img
        className={css.friendAvatar}
        src={avatar}
        alt={name}
        width="50px"
        height="50px"
      />
      <p className={css.friendName}>{name}</p>
    </li>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
