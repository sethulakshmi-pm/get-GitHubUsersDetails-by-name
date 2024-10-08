import GithubUser from './GithubUser';
import React from 'react';

class Followers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.params.username}/followers`)
      .then(response => response.json())
      .then(
        user => {
          console.log("WWWWW", user)
          this.setState({
            followers: user,
          });
        },
      );
  }

  render() {
    console.log("wwwwwww", this.state.followers)

    if (!this.state.followers) {
      return <div>LOADING FOLLOWERS...</div>
    }

    return (
      <div>
        Followers of - {this.props.params.username}

        <div>
          {this.state.followers.map((user, index) => {
            return <div
              key={index}
            >
              <GithubUser
                user={user}
              />
            </div>
          })}
        </div>
      </div>
    );
  }
};

export default Followers;
