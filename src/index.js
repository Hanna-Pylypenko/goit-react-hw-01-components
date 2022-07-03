import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { Profile } from 'components/Profile';
import user from 'user.json';
const userData = user;
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />
    </App>
  </React.StrictMode>
);
console.log(user);
