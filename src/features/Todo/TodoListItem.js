import { useDispatch } from 'react-redux'
import {checkRequest, edit, removeRequest} from '../../store/actions/todo'

export default function TodoListItem ({ todo }) {
    const dispatch = useDispatch();


    function onRemoveBtnClick () {
        dispatch(removeRequest(todo.id));
    }

    function onEditBtnClick () {
        dispatch(edit(todo))
    }

    function onCheckClick () {
        dispatch(checkRequest(todo))
    }

    return (
        <li>
            <input onChange={onCheckClick} type='checkbox' checked={todo.done}/>
            {todo.title}
            <button onClick={onEditBtnClick}>Edit</button>
            <button onClick={onRemoveBtnClick}>Remove</button>
        </li>
    );
}