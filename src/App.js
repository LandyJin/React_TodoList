import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

class App extends Component {
  state = {
    toDos: [
      {
        id: 1,
        title: 'Take out trash',
        completed: false,
      },
      {
        id: 2,
        title: 'Hello World',
        completed: false,
      },
      {
        id: 3,
        title: 'Practice with React',
        completed: false,
      },
    ]
  }

  // Toggle Complete checkbox
  markCompleted = (id) => {
    console.log(id)
    this.setState({
      toDos: this.state.toDos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo;
      })
    })
  }

  onItemDeleteClick = (id) => {
    console.log(id)
    this.setState({
      toDos: this.state.toDos.filter(todo => {
         return todo.id !== id;
      })
    })
  }

  render() {
    return (
      <div className="App">
        <ToDoList 
          //这个markcomplete下两层props
          markCompleted = {this.markCompleted}
          onItemDeleteClick = {this.onItemDeleteClick}
          toDos={this.state.toDos}/>
      </div>
    );
  }
}

export default App;
