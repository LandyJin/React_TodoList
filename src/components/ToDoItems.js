import React, { Component } from 'react';
import PropTypes from 'prop-types';

// CSS
import '../css/ToDoList.css';

export class ToDoItems extends Component {
  getStyle = () => {
    // if(this.props.todo.completed) {
    //   return {
    //     textDecoration: 'line-through',
    //   }
    // }
    // else {
    //   return {
    //     textDecoration: 'none',
    //   }
    // }
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    }
  }

  // markCompleted = (e) => {
  //   return{

  //   }
  // }
  
  render() {
    const {id, title} = this.props.todo;
    return (
      <div style={this.getStyle()} className="toDoItems">
          <p>
            <input type="checkbox" onChange={this.props.markCompleted.bind(this, id)}/>
            { title }
          </p>
      </div>
    )
  }
}

// PropTypes
ToDoItems.propTypes = {
  todo: PropTypes.object.isRequired,
}

export default ToDoItems
