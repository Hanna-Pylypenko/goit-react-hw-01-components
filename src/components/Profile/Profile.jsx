import css from "./Profile.module.css"
export const Profile = ({ name, tag, location, avatar, followers, views, likes }) => {
    return (<div className={css.profile}>
        <div className={css.description}>
            <img width="240px"
                src={avatar}
                alt={name}
                className="avatar"
            />
            <p className="name">{name}</p>
            <p className="tag">@{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className={css.stats}>
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{likes}</span>
            </li>
        </ul>
    </div>);
};
