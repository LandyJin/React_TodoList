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
          {this.props.toDos
            .sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0))
            .map(todo => (
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
