import GithubUser from './GithubUser';
import React from 'react';

class Following extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.params.username}/following`)
      .then(response => response.json())
      .then(
        user => {
          console.log("following", user)
          this.setState({
            following: user,
          });
        },
      );
  }

  render() {
    console.log("wwwwwww", this.state.following)

    if (!this.state.following) {
      return <div>LOADING FOLLOWING...</div>
    }

    return (
      <div>
        Following of - {this.props.params.username}

        <div>
          {this.state.following.map((user, index) => {
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

export default Following;
