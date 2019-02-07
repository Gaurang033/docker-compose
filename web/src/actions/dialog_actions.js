export const ADD_TODO = 'ADD_TODO'

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