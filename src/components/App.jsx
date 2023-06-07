import React from 'react';
import _ from 'lodash';
import user from './user.json';
import data from './data.json';
import Profile from './Profile/profile';
import PropTypes from 'prop-types';
import Statistics from './Statistics/Statistics';

export const App = () => {
  return (
    <div
      style={{
        padding: 15,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#366665',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data}/>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};