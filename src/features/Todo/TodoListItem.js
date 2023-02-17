import { useDispatch } from 'react-redux'
import {check, edit, remove} from '../../store/actions/todo'

export default function TodoListItem ({ todo }) {
    const dispatch = useDispatch();


    function onRemoveBtnClick () {
        dispatch(remove(todo.id));
    }

    function onEditBtnClick () {
        dispatch(edit(todo))
    }

    function onCheckClick () {
        dispatch(check(todo))
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