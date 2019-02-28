import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import uuid from 'uuid';
import axios from 'axios';

// Add To Do Item
import AddTodoItem from './components/AddTodoItem';

class App extends Component {
  state = {
    toDos: [],
    isLoaded: false,
  }

  componentDidMount() {
    axios.get('http://localhost:3000/toDos').then((response) => {
      this.setState({
        toDos: response.data,
        isLoaded: true
      })
    });
  }

  // addToDoAxois() {
  //   axios.post('http://localhost:3000/toDos/posts', this.state.newToDos).then((response) => {
  //     let { toDos } = this.state;

  //     toDos.push(response.data);

  //     this.setState({ toDos, newToDosModal: false, newToDos: {
  //       title: '',
  //     }});
  //   });
  // }

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
    // console.log(id)
    // this.setState({
    //   toDos: this.state.toDos.filter(todo => {
    //      return todo.id !== id;
    //   })
    // })
    axios.delete('http://localhost:3000/toDos/' + id).then((response) => {
      console.log(response)
      this.componentDidMount();
    });
  }
  

  // Add Todo Item
  addToDo = (title) => {
    const newToDo = 
      {
        "id": uuid.v4(),
        "title": title,
        "completed": false
      }
    axios.post('http://localhost:3000/toDos', newToDo).then((response) => {
      console.log(response)
      this.setState({
        toDos: [...this.state.toDos, newToDo],
      })
      this.componentDidMount()
    });
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
