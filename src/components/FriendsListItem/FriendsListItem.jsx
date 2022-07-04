import css from "./FriendsListItem.module.css"
export const FriendListItem = ({ avatar, name, isOnline, id}) => {
 
    return (<li  className={css.friendItem} key={id.toString()}>
        <div className={css.onlineOfflineMarker}>
        { isOnline === true ? (<span className={css.isOnlineMarker}></span>) : (<span className={css.isOfflineMarker}></span>)}</div>
        
             <img className={css.friendAvatar} src={avatar} alt={name} width="50px" height="50px" />
             <p className={css.friendName}>{name}</p>
            </li>)
}
