import {
    TODO_CHECK_ACTION,
    TODO_CREATE_ACTION,
    TODO_EDIT_ACTION,
    TODO_LOADING_ACTION,
    TODO_REMOVE_ACTION,
    TODO_SET_LIST_ACTION,
    TODO_UPDATE_ACTION,
} from '../actions/todo'


const DEFAULT_TODO = {
    title: '',
    done: false,
}
const initialState = {
    list: [],
    editTodo: DEFAULT_TODO,
    loading: false,
}

export default function todoReducer(state = initialState, {type, payload}) {
    switch (type) {
        case TODO_UPDATE_ACTION:
            const newList = state.list.map(todo => todo.id === state.editTodo.id ? payload : todo);

            return {
                list: newList,
                editTodo: DEFAULT_TODO,
                loading: false,
            }
        case TODO_CREATE_ACTION: return { ...state, list: [...state.list, payload], loading: false }
        case TODO_REMOVE_ACTION:
            return {
                ...state,
                list: state.list.filter(todo => todo.id !== payload),
                loading: false
            }
        case TODO_EDIT_ACTION:
            return { ...state, editTodo: payload }
        case TODO_CHECK_ACTION:
            const newTodo = {
                ...payload,
                done: payload.done === false,
            };

            console.log(payload)
            console.log(newTodo)

            return {
                ...state,
                list: state.list.map(todoItem => todoItem.id === newTodo.id ? newTodo : todoItem),
                loading: false
            };
        case TODO_SET_LIST_ACTION: return { ...state, list: payload, loading: false }
        case TODO_LOADING_ACTION: return { ...state, loading: payload }
        default:
            return state;
    }
}