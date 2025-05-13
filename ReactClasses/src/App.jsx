import Form from "./components/Form";
import List from "./components/List";
import "./App.css";
import Header from "./components/Header";

import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleFormSubmit(title) {
    const newTodos = [
      ...this.state.todos,
      { title, done: false, id: uuidv4() },
    ];
    this.setState({ todos: newTodos });

    console.log(this.state.todos);
  }

  handleDelete(id) {
    const newTodos = this.state.todos.filter((todo) => todo.id !== id);

    this.setState({ todos: newTodos });
  }
  render() {
    return (
      <>
        <Header />
        <main className="container">
          <Form onSubmit={this.handleFormSubmit} />
          <List todos={this.state.todos} onDelete={this.handleDelete} />
        </main>
      </>
    );
  }
}

export default App;
