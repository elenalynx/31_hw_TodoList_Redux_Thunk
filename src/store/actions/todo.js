import TodoApi from "../../api/TodoApi";

export const TODO_SET_LIST_ACTION = 'setList';
export const TODO_CREATE_ACTION = 'create';
export const TODO_REMOVE_ACTION = 'remove';
export const TODO_EDIT_ACTION = 'edit';
export const TODO_CHECK_ACTION = 'check';
export const TODO_LOADING_ACTION = 'loading';


export function getList() {
    return (dispatch, state) => {
        console.log('current state', state)
        dispatch(loading())

        TodoApi
            .getList()
            .then((list) => {
                dispatch(setList(list));
            })
    }
}

export function setList (list) {
    return { type: TODO_SET_LIST_ACTION, payload: list }
}

export function loading () {
    return { type: TODO_LOADING_ACTION, payload: true }
}

export function create (todo) {
    return { type: TODO_CREATE_ACTION, payload: todo }
}
export function remove (id) {
    return { type: TODO_REMOVE_ACTION, payload: id }
}
export function edit (todo) {
    return { type: TODO_EDIT_ACTION, payload: todo }
}
export function check (todo) {
    return { type: TODO_CHECK_ACTION, payload: todo }
}