import React, { Component } from 'react';
import AddTodo from './components/AddTodo';
import List from './components/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddTodo />
        <List />
      </div>
    );
  }
}

export default App;
