import React, { Component } from 'react'
import { connect } from 'react-redux'
import {listTodos}  from '../actions/list_todo_actions'
import {deleteTodo}  from '../actions/delete_todo_actions'

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

const mapDispatchToProps = (dispatch) => {
    return{
        listTodos: () => dispatch(listTodos()),
        deleteTodo: (id) => dispatch(deleteTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListContainer)
