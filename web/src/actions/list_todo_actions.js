import axios from 'axios'
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