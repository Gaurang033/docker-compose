import React, { Component } from 'react'
// import AddTodo from '../components/add_todo';
import { connect } from 'react-redux'
import {toggleAddTodoDialog, addNewTodo, handleChange} from '../actions'
import AddTodoDialog from '../components/add_todo_dialog';
class AddTodoContainer extends Component {
    render() {
        return (
            <div>
                <AddTodoDialog toggleAddTodoDialog={this.props.toggleAddTodoDialog} 
                addNewTodo = {this.props.addNewTodo}
                newTodoList = {this.props.newTodoList}
                handleChange = {this.props.handleChange}
                is_add_todo_dialog_opened={this.props.is_add_todo_dialog_opened}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

const bindActionsToDispatch = dispatch => 
(
  {
    toggleAddTodoDialog : (e) => dispatch(toggleAddTodoDialog(e)),
    handleChange: (e) => dispatch(handleChange(e)),
    addNewTodo : () => dispatch(addNewTodo())
  }
)

export default connect(mapStateToProps, bindActionsToDispatch)(AddTodoContainer)
