import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import uuid from 'uuid'
import axois from 'axios'

// Add To Do Item
import AddTodoItem from './components/AddTodoItem';

class App extends Component {
  state = {
    toDos: [],
    isLoaded: false,
  }

  componentDidMount() {
    axois.get('https://my-json-server.typicode.com/LandyJin/React_TodoList/toDos').then((response) => {
      this.setState({
        toDos: response.data,
        isLoaded: true
      })
    });
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
    const {
      isLoaded
    } = this.state;

    return (
      <div>
        {isLoaded ?
          <div className="App">
          {console.log(this.props.title)}
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
        :
           <p>Loading ...</p>
        }
      </div>
    )
  }
}

export default App;
