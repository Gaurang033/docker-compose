import axios from 'axios'
export const ADD_TODO = 'ADD_TODO'


export function deleteTodo(id) {
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
