import React, { Component } from 'react';
import './App.css';

// COMPONENTS
import Todos from './components/Todos'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Finish German assignment',
        completed: true
      },
      {
        id: 2,
        title: 'Go to Walmart',
        completed: false
      },
      {
        id: 3,
        title: 'Complete React crash course',
        completed: false
      },
      {
        id: 4,
        title: 'Get more sleep',
        completed: false
      },
      {
        id: 5,
        title: 'Study for OOP mid term',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    console.log("Todo #", id);
  }

  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
