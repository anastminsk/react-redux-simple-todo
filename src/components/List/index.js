import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTodo } from '../../actions'

/*
const List = (props) => (
    <ul>
      {props.todos.map((todo, index) => (
        <li key = {index}>
          <span>{todo.text}</span>
          <button onClick = {() => props.dispatch(deleteTodo(todo.id))}>Delete</button>
        </li>
      ))}
    </ul>
)
*/

class List extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todo) => (
          <li key = {todo.id} style={{marginTop: '10px'}}>
            <span style={{marginRight: '10px'}}>{todo.text}</span>
            <button onClick = {() => this.props.dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos.data
});

export default connect(mapStateToProps)(List);
