import React, { Component } from 'react';
import ToDoItems from './ToDoItems';
import PropTypes from 'prop-types';

class ToDoList extends Component {
  render() {
    console.log(this.props.toDos);
    return (
      this.props.toDos.map((todo) => (
        <div>
            <ToDoItems 
              key = {todo.id}
              todo = {todo}
            />
        </div>
      ))
    );
  }
}

ToDoList.propTypes = {
  toDos: PropTypes.array.isRequired,
}

export default ToDoList;
