import PropTypes from 'prop-types';
import css from "./FriendsList.module.css"
import { FriendListItem } from "../FriendsListItem/FriendsListItem";
export const FriendsList = ({ friends }) => {
        const friendsCollection =
        friends.map(friend => {
            
            return <FriendListItem avatar={friend.avatar}
                name={friend.name}
                isOnline={friend.isOnline}
                key={friend.id} />
            
        }
        )
   
    return (<ul className={css.friendList}>
        {friendsCollection}
    </ul>)
} 
 
FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape)
}




 
