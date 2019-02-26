import React, { Component } from 'react';
import PropTypes from 'prop-types';

// CSS
import '../css/ToDoList.css';

export class ToDoItems extends Component {
  state = {
    isEdited : false,
    onSubmit : false,
    title: ''
  }

  onChange = (e) => {
    this.setState ({
        [e.target.name]: e.target.value,
    })
  }

  onSubmit = (e) => {
    console.log('a')
    e.preventDefault();
    
    this.setState ({
        title: this.state.title,
        isEdited : false,
        onSubmit: true
    })
    document.querySelector('input[type=checkbox]').style.visibility = "visible";
  }

  onItemEditClick = () => {
    this.setState ({
      isEdited : true,
    })
    document.querySelector('input[type=checkbox]').style.visibility = "hidden";
  }

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
    const {
      id, 
      title, 
    } = this.props.todo;

    return (
      //style attribute 可以加变量或者function
      <div style={this.getStyle()} className="toDoItems">
          <div>
            <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
            {this.state.isEdited ? 
              <form 
                className ="editItem"
                onSubmit={this.onSubmit}>
                <input 
                    type="text"
                    name="title"
                    value = { this.state.title }
                    onChange = {this.onChange}
                />
                <input 
                    type="submit" 
                    value="Submit"
                />
              </form>
              : 
              <span>
                {this.state.onSubmit ? <span>{ this.state.title }</span> : <span>{ title }</span>}
                <button onClick={this.onItemEditClick}>Edit</button>
              </span>
              }
            
            <button onClick={this.props.onItemDeleteClick.bind(this, id)}>Delete</button>
          </div>
      </div>
    )
  }
}

// PropTypes
ToDoItems.propTypes = {
  todo: PropTypes.object.isRequired
}

export default ToDoItems
