import React, { Component } from 'react'
import AddTodo from "./todos/containers/AddTodo"
import VisibleTodoList from "./todos/containers/VisibleTodoList"

import './App.css'

class TodoApp extends Component {
  render() {
    return (
      <div className="App">
        {
          <h1>TODO</h1>
        }
        <AddTodo />
        <VisibleTodoList />
      </div>
    );
  }
}

export default TodoApp;
