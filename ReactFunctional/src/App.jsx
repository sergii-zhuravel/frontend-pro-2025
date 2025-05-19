import Form from "./components/Form";
import List from "./components/List";
import "./App.css";
import Header from "./components/Header";

import React, { Component, useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([]);

  const handleFormSubmit = (title) => {
    const newTodos = [...todos, { title, done: false, id: uuidv4() }];
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);

    setTodos(newTodos);
  };

  const handleDoneToggle = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }

      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <>
      <Header />
      <main className="container">
        <Form onSubmit={handleFormSubmit} />
        <List
          todos={todos}
          onDelete={handleDelete}
          onDoneToggle={handleDoneToggle}
        />
      </main>
    </>
  );
}

export default App;
