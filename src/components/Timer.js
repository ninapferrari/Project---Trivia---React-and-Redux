import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {
  constructor() {
    super();
    this.state = {
      maxTime: 30,
    };
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  startTimer = () => {
    const interval = 1000;
    this.timer = setInterval(() => {
      this.setState((prev) => ({
        maxTime: prev.maxTime - 1,
      }), () => this.stopTimer());
    }, interval);
  }

  stopTimer = () => {
    const { state: { maxTime }, props: { clicked } } = this;
    if (maxTime === 0) clicked();
  }

  render() {
    const { state: { maxTime } } = this;
    return (
      <div>{maxTime.toString().padStart(2, '0')}</div>
    );
  }
}

Timer.propTypes = {
  clicked: PropTypes.func.isRequired,
};

export default Timer;
