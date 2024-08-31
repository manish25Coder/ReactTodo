import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTodos } from '../redux/actions';
import TodoItem from './TodoItem';

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div>
      {todos.map(todo => (
        <TodoItem key={todo._id} className={`flex justify-between items-center p-4 mb-3 rounded-lg ${todo.completed ? 'bg-gray-700 text-gray-400 line-through' : 'bg-gray-700 text-white'}`} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
