import React from 'react';

class Repo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.props.params.username}/repos`)
      .then(response => response.json())
      .then(
        user => {
          console.log("DATA", user)
          this.setState({
            repo: user,
          });
        },
      );
  }

  render() {
    console.log("wwwwwww", this.state.repo)

    if (!this.state.repo) {
      return <div>LOADING REPO...</div>
    }

    return (
      <div>
        <h1>Repo of - {this.props.params.username}</h1>

        <div>
          {this.state.repo.map((user, index) => {
            return <div
              key={index}
            >
              <h3>Full Name-{user.full_name}</h3>
              <div>Clone URL - {user.clone_url}</div>
              <div>Created - {user.created_at}</div>
              <div>Default branch - {user.default_branch}</div>
              <br /><br />
            </div>
          })}
        </div>
      </div>
    );
  }
};

export default Repo;
