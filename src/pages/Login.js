import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPlayerAction } from '../redux/actions';
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
    const { addPlayer } = this.props;
    const { name, email } = this.state;
    event.preventDefault();
    addPlayer({ name, email });
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

const mapDispatchToProps = (dispatch) => ({
  addPlayer: (value) => dispatch(addPlayerAction(value)),
});

Login.propTypes = {
  addPlayer: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
