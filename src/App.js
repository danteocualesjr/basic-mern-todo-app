import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreateTodo from "./components/create-todo.components.js";
import EditTodo from "./components/edit-todo.components.js";
import TodosList from "./components/todo-list.components.js";

import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h1>A MERN To-Do App</h1>
        </div>
        <Route path="/" exact component={TodoList} />
        <Route path="/edit/:id" component={EditTodo} />
        <Route path="/create" component={CreateTodo} />
      </Router>
    );
  }
}

export default App;
