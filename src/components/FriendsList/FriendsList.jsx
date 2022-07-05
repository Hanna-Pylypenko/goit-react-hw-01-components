import PropTypes from 'prop-types';
import css from "./FriendsList.module.css"
import { FriendListItem } from "../FriendsListItem/FriendsListItem";
export const FriendsList = ({ friends }) => {   
    return (<ul className={css.friendList}>
        {friends.map(friend => {
            
            return (<FriendListItem avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                keyItem={friend.id} />)
            
        }
        )}
    </ul>)
} 
 
FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired
    }))
}




 
