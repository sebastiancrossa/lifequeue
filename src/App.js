import React, { Component } from 'react';
import './App.css';
import uuid from 'uuid';

// COMPONENTS
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

// Display functions
import Header from './components/layout/Header'

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Finish German assignment',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Go to Walmart',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Complete React crash course',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Get more sleep',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Study for OOP mid term',
        completed: false
      }
    ]
  }

  // Changes the state of the item when checked
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }

        return todo;
      })
    });
  }

  // Deletes the todo item
  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  }

  // Adds a todo
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }

    this.setState({ todos: [...this.state.todos, newTodo] });
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
        </div>
      </div>
    );
  }
}

export default App;
