import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../Features/Todo/TodoSlice';
import AddTodo from './Addtodo';

function Todos() {
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [todoToEdit, setTodoToEdit] = useState(null);

    const handleEdit = (todo) => {
        setTodoToEdit(todo);
    };

    const handleCancelEdit = () => {
        setTodoToEdit(null);
    };

    return (
        <>
            <div>Todos</div>
            <AddTodo todoToEdit={todoToEdit} />
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        <div className='text-white'>{todo.text}</div>
                        <div>
                            <button
                                onClick={() => handleEdit(todo)}
                                className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md mr-2"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => dispatch(removeTodo(todo.id))}
                                className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            {todoToEdit && (
                <button onClick={handleCancelEdit} className="text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg mt-4">
                    Cancel Edit
                </button>
            )}
        </>
    );
}

export default Todos;