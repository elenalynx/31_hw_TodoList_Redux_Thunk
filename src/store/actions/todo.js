import TodoApi from "../../api/TodoApi";

export const TODO_SET_LIST_ACTION = 'setList';
export const TODO_UPDATE_ACTION = 'update';
export const TODO_CREATE_ACTION = 'create';
export const TODO_REMOVE_ACTION = 'remove';
export const TODO_EDIT_ACTION = 'edit';
export const TODO_CHECK_ACTION = 'check';
export const TODO_LOADING_ACTION = 'loading';


export function getList() {
    return (dispatch) => {   //return (dispatch, state) => {
        // console.log('current state', state)
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

export function save (todo) {
    return (dispatch) => {      //вариант если надо получить состояние тут (dispatch, getState)
        dispatch(loading())

        if (todo.id) { //edit
            TodoApi
                .update(todo.id, todo)
                .then(() => {
                    dispatch(update(todo))
                })

        } else {  //create
            TodoApi
                .create(todo)
                .then((newTodo) => {
                    dispatch(create(newTodo))
                })
        }
    }
}

export function update (todo) {
    return { type: TODO_UPDATE_ACTION, payload: todo }
}

export function create (todo) {
    return { type: TODO_CREATE_ACTION, payload: todo }
}

export function removeRequest (id) {
    return (dispatch) => {
        dispatch(loading())

        TodoApi
            .delete(id)
            .then(() => {
                dispatch(remove(id));
            })
    }
}

export function remove (id) {
    return { type: TODO_REMOVE_ACTION, payload: id }
}

export function checkRequest (todo) {
    return (dispatch) => {
        dispatch(loading())

            TodoApi
                .update(todo.id, todo)
                .then(() => {
                    dispatch(check(todo))
                })
    }
}

export function edit (todo) {
    return { type: TODO_EDIT_ACTION, payload: todo }
}

export function check (todo) {
    return { type: TODO_CHECK_ACTION, payload: todo }
}