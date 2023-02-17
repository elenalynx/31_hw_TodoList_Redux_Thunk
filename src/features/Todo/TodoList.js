import TodoListItem from './TodoListItem'

export default function TodoList({ list }) {
    return (
        <ul>
            {list.map(todo => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </ul>
    );
}