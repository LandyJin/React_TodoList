import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import uuid from 'uuid'

// Add To Do Item
import AddTodoItem from './components/AddTodoItem';

class App extends Component {
  state = {
    toDos: [
      {
        id: uuid.v4(),
        title: 'Take out trash',
        completed: false,
      },
      {
        id: uuid.v4(),
        title: 'Hello World',
        completed: false,
      },
      {
        id: uuid.v4(),
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

  // Delete Todo Item
  onItemDeleteClick = (id) => {
    console.log(id)
    this.setState({
      toDos: this.state.toDos.filter(todo => {
         return todo.id !== id;
      })
    })
  }

  // Add Todo Item
  addToDo = (title) => {
    const newToDo = {
      // Generate ID automaticly
      id: uuid.v4(),
      title: title,
      completed: false,
    }
    this.setState({
      toDos: [...this.state.toDos, newToDo]
    })
  }

  render() {
    console.log(this.props.title)
    return (
      <div className="App">
        <AddTodoItem
          addToDo = {this.addToDo}
        />

        <ToDoList 
          //这个markcomplete下两层props
          markCompleted = {this.markCompleted}
          onItemDeleteClick = {this.onItemDeleteClick}
          onItemEditClick = {this.onItemEditClick}
          toDos={this.state.toDos}/>
      </div>
    );
  }
}

export default App;
