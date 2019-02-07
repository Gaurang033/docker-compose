import axios from 'axios'
import store from '../index'
export const ADD_TODO = 'ADD_TODO'

export function listTodos() {
  return function (dispatch) {
    axios.get("http://localhost:5001/todos")
      .then(response => {
        console.log(response.data);
        dispatch(_getListTodoAction(response.data));
      })
  }
}

export function _getListTodoAction(todos) {
  console.log("getTodos called")
  return {
    type: 'LIST_TODOS',
    todos: todos
  }
}

export function deleteTodo(id) {
  console.log("--------- deleteTodo ------------ "+id)
  return function (dispatch) {
    axios.delete("http://localhost:5001/todos/" + id)
      .then(response => {
        dispatch(_getDeleteTodoAction(response.data))
      })
  }
}

export function _getDeleteTodoAction(data) {
  return {
    type: 'DELETE_TODO',
    todos: data
  }
}

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

export function toggleAddTodoDialog(state){
  return{
    type: 'TOOGLE_ADD_DIALOG',
    is_add_todo_dialog_opened: state
  }
}

export function handleChange(event){
  return{
    type: 'HANDLE_CHANGE',
    event: event
  }
}