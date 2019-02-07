import axios from 'axios'
import store from '../index'
export const ADD_TODO = 'ADD_TODO'

export function addNewTodo() {
  return function (dispatch) {
    axios.post("http://localhost:5001/todos", 'task=' + store.getState().newTodoList.task)
      .then(response => {
        dispatch(_addTodoAction(response.data))
      })
  }
}

export function _addTodoAction(new_todo) {
  return {
    type: 'ADD_TODO',
    new_todo: new_todo
  }
}