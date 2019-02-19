import React, { Component } from 'react';
import AddTodo from "./todos/containers/AddTodo";
import './App.css';

class TodoApp extends Component {
  render() {
    return (
      <div className="App">
        {
          <h1>TODO</h1>
        }
        <AddTodo />
      </div>
    );
  }
}

export default TodoApp;
