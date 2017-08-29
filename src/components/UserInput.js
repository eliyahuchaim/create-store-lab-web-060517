import React, { Component } from 'react';

class UserInput extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: "",
      hometown: ""
    }
  };


  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_USER',
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    });
  };


  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Username:
        </label>
          <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
        <label>
          Hometown:
        </label>
          <input type="text" name="hometown" value={this.state.hometown} onChange={this.handleChange} />
          <input type="submit" />
      </form>
    );
  }
};

export default UserInput;
