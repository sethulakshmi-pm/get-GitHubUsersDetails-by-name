import { Link } from 'react-router';
import React from 'react';

class GithubUser extends React.Component {

  render() {

    let url = `/user/${this.props.user.login}`;
    let username = this.props.user.login;
    let avatarUrl = this.props.user.avatar_url;

    return (
      <Link
        className="github-usertag"
        to={url}
      >
        <img
          alt={'github-user-avatar'}
          className="github-usertag__avatar"
          src={avatarUrl}
        />
        {username}
      </Link>
    );
  }
};

export default GithubUser;
