import css from "./FriendsList.module.css"
import { FriendListItem } from "../FriendsListItem/FriendsListItem";
export const FriendsList = ({ friends }) => { const friendsCollection = friends.map(friend => { return (<FriendListItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} id={friend.id} />) }
)
    return (<ul className={css.friendList}>
        {friendsCollection}
    </ul>)
} 




 
