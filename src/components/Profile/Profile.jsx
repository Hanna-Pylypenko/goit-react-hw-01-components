import PropTypes from 'prop-types';
import css from "./Profile.module.css"
export const Profile = ({ name, tag, location, avatar, stats }) => {
    
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
                <span className="quantity">{stats.followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{stats.views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{stats.likes}</span>
            </li>
        </ul>
    </div>);
};

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    tag:PropTypes.string.isRequired,
    location:PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
}