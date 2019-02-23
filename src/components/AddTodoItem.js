import React, { Component } from 'react';
import '../css/AddTodoItem.css';

export class AddTodoItem extends Component {
  state = {
      title: '',
  }

  onChange = (e) => {
    this.setState ({
        [e.target.name]: e.target.value,
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addToDo(this.state.title);
    this.setState ({
        title: ''
    })
  }

  render() {
    return (
        <form 
            onSubmit={this.onSubmit}
            className="addTodo"
        >
            <input 
                type="text"
                name="title"
                placeholder="Add To do Item..."
                value = {this.state.title }
                onChange = {this.onChange}
            />
            <input 
                type="submit" 
                value="Submit"
            />
        </form>
    )
  }
}

export default AddTodoItem
