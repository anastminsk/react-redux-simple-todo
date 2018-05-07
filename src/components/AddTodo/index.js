import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions';

/*
const AddTodo = (props) => (
  <form onSubmit = {(event) => {
      event.preventDefault();
      let input = event.target.userInput.value;
      props.dispatch(addTodo(input));
    }}>
    <input type="text" name="userInput" />
    <button>Submit</button>
  </form>
)
*/

class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let input = event.target.userInput.value;
    this.props.dispatch(addTodo(input));
  }

  render() {
    return (
      <form onSubmit = {this.handleSubmit}>
        <input type="text" name="userInput" />
        <button>Submit</button>
      </form>
    );
  }
}

export default connect()(AddTodo);
