import React, { Component } from 'react';
import PropTypes from 'prop-types';

// CSS
import '../css/ToDoList.css';

export class ToDoItems extends Component {
  state = {
    isEdited : false,
    onSubmit : false,
    title: '',
    // isStared : false
  }

  onChange = (e) => {
    this.setState ({
        [e.target.name]: e.target.value,
    })
  }

  onSubmit = (e) => {
    console.log(e)
    e.preventDefault();
    
    this.setState ({
        title: this.state.title,
        isEdited : false,
        onSubmit: true
    })
  }

  onItemEditClick = () => {
    this.setState ({
      isEdited : true,
    })
  }

  // onload = () => {
  //   let onClickstars = document.getElementsByClassName('getElementsByClassName').getElementsByTagName('span');
  //   console.log(onClickstars)
  // }

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
      // stars
    } = this.props.todo;

    return (
      //style attribute 可以加变量或者function
      <div style={this.getStyle()} className="toDoItems">
          <div>
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

                <button onClick={this.props.onItemDeleteClick.bind(this, id)}>Delete</button>
              </form>
              : 
              <span className="checkbox">
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/>
                {this.state.onSubmit ? 
                  <span>{ this.state.title }</span> : 
                  <div className='itemDetail'>
                    <span>{ title }</span>
                    {/* <div className="onClickstars">
                      <span>☆</span>
                      <span>☆</span> 
                      <span>☆</span> 
                      <span>☆</span> 
                      <span>☆</span>
                    </div> */}
                  </div>}
                <div className='buttons'>
                  <button onClick={this.onItemEditClick}>Edit</button>
                  <button onClick={this.props.onItemDeleteClick.bind(this, id)}>Delete</button>
                </div>
              </span>
              }
            
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
