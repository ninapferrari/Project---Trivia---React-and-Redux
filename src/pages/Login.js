import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTokenThunk } from '../redux/actions/index';
import logo from '../trivia.png';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      disabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => {
      this.validateEmail();
    });
  }

  validateEmail = () => {
    const regex = /\S+@\S+\.\S+/;
    const { name, email } = this.state;
    const nameLength = 0;
    if (regex.test(email) && name.length > nameLength) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  };

  onclick = (event) => {
    const { dispatch, history, token } = this.props;
    event.preventDefault();
    console.log(this.props);
    dispatch(getTokenThunk());
    history.push('/game');
  }

  render() {
    const { name, email, disabled } = this.state;
    return (
      <div>
        <header className="App-header">
          <img src={ logo } className="App-logo" alt="logo" />
        </header>
        <form>
          <label htmlFor="name">
            Nome:
            <input
              type="text"
              id="name"
              name="name"
              value={ name }
              onChange={ this.handleChange }
              data-testid="input-player-name"
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={ email }
              data-testid="input-gravatar-email"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="submit"
            onClick={ this.onclick }
            data-testid="btn-play"
            disabled={ disabled }
          >
            Play
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  token: state.token,
});

export default connect(mapStateToProps)(Login);
