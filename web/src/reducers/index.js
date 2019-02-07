
let defaultState = {
    todos: {},
    is_add_todo_dialog_opened: false,
    newTodoList: {
        task: '',
        id:''
    }
}

const mainReducer = (state = defaultState, action) => {

    switch (action.type) {
        case 'LIST_TODOS':
            return {
                ...state,
                todos: action.todos
            }
        case 'ADD_TODO':
            const {id, task} = action.new_todo            
            return {
                ...state,
                todos: {...state.todos, [id]:task},
                newTodoList : {task:'', id: ''}
            }
        case 'DELETE_TODO':
            return {
                ...state,
                todos: action.todos
            }

        case 'TOOGLE_ADD_DIALOG':
        return{
            ...state,
            is_add_todo_dialog_opened: action.is_add_todo_dialog_opened
        }

        case 'HANDLE_CHANGE':
        const {name, value} = action.event.target
        return {
            ...state,
            newTodoList: {
                [name]: value
              }

        }
        default:
            return state
    }
}

export default mainReducer