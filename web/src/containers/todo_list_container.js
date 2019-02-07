import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actionCreator from '../actions'
import TodoList from '../components/todo_list'
class TodoListContainer extends Component {
    render() {
        return (
            <TodoList todos={this.props.todos}
                fetch_todos={this.props.listTodos}
                deleteTodo={this.props.deleteTodo}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

export default connect(mapStateToProps, actionCreator)(TodoListContainer)
