import React from 'react';
import { useDispatch } from 'react-redux';
import { completeTodo, deleteTodo } from '../redux/actions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div className='flex gap-2 flex-grow p-2 rounded bg-gray-700 text-white'>
      <h2 className=" text-xl font-bold" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.name}</h2>
      <p className="flex-grow p-2 rounded bg-gray-700 text-white">{todo.description}</p>
      <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(completeTodo(todo._id))}>Complete</button>
      <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(deleteTodo(todo._id))}>Delete</button>
    </div>
  );
};

export default TodoItem;
