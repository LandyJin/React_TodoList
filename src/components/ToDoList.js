import React, { Component } from 'react';
import ToDoItems from './ToDoItems';
import PropTypes from 'prop-types';

// CSS
import '../css/ToDoList.css';


class ToDoList extends Component {
  render() {
    console.log(this.props.toDos);
    return (
        <div>
          {/* Add map method in div, otherwise 'key' error will display */}
          {this.props.toDos.map((todo) => (
            <ToDoItems 
              className = "toDoItem"
              markComplete = {this.props.markCompleted}
              onItemDeleteClick = {this.props.onItemDeleteClick}
              key = {todo.id}
              todo = {todo}
            />
          ))}
        </div>
    );
  }
}

// PropTypes
ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired,
}

export default ToDoList;
