import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardQuestion extends Component {
  constructor() {
    super();

    this.state = {
      answers: [],
    };
  }

  componentDidMount() {
    this.updateAnswer();
  }

  updateAnswer = () => {
    const { question } = this.props;
    const wrongAnswers = question.incorrect_answers
      .map((answer, index) => ({ answer, index, test: `wrong-answer-${index}` }));

    const answers = [...wrongAnswers,
      { answer: question.correct_answer, index: 4, test: 'correct-answer' }];

    const numRandom = 0.5;
    const shuffledAnswers = answers.sort(() => Math.random() - numRandom);

    this.setState({ answers: shuffledAnswers });
  }

  render() {
    const { question, changeQuestion } = this.props;
    const { answers } = this.state;

    return (
      <div>
        <p data-testid="question-category">{question.category}</p>
        <h3 data-testid="question-text">{question.question}</h3>
        <div data-testid="answer-options">
          { answers.map((elem) => (
            <button
              key={ elem.index }
              type="button"
              data-testid={ elem.test }
            >
              { elem.answer }
            </button>
          )) }
        </div>
        <button
          type="button"
          onClick={ () => {
            changeQuestion();
            this.updateAnswer();
          } }
        >
          Next Question
        </button>
      </div>
    );
  }
}

CardQuestion.propTypes = {
  question: PropTypes.shape({
    category: PropTypes.string,
    question: PropTypes.string,
    correct_answer: PropTypes.string,
    incorrect_answers: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  changeQuestion: PropTypes.func.isRequired,
};

export default CardQuestion;
