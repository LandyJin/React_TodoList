import React, { Component } from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

class App extends Component {
  state = {
    toDos: [
      {
        id: 1,
        title: 'Take out trash',
        comleted: false,
      },
      {
        id: 2,
        title: 'Hello World',
        comleted: false,
      },
      {
        id: 3,
        title: 'Practice with React',
        comleted: false,
      },
    ]
  }
  render() {
    return (
      <div className="App">
        <ToDoList toDos={this.state.toDos}/>
      </div>
    );
  }
}

export default App;
