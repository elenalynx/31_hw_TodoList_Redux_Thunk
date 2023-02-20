import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {checkRequest, save} from '../../store/actions/todo'

export default function Header() {
    const todo = useSelector(state => state.todo.editTodo)
    const [title, setTitle] = useState(todo?.title ?? '');
    const dispatch = useDispatch();

    useEffect(() => {
        setTitle(todo.title);
    }, [todo])

    function onFormSubmit (e) {
        e.preventDefault()

        const newTodo = {
            ...todo,
            title,
        };
        dispatch(save(newTodo))
        setTitle('');
    }

    function onChangeClick (e) {
        e.preventDefault()

        // const newTodo = {
        //     ...todo,
        //     title,
        // };
        setTitle(e.target.value)
        // dispatch(checkRequest(newTodo))
        // setTitle('');
    }

    return (
        <form onSubmit={onFormSubmit}>
            <label htmlFor='title'>Title</label>
            <input
                type='text'
                id='title'
                value={title}
                onChange={onChangeClick}
            />
        </form>
    );
}