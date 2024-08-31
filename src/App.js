import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './redux/actions';
import TodoList from './components/TodoList';

const App = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ name, description }));
    setName('');
    setDescription('');
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center">
       <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
      <h1 className="text-center text-2xl font-bold mb-6">My Todos</h1>
      <form 
      onSubmit={handleSubmit}
       className="flex gap-4 mb-4"
      >

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="flex-grow p-2 rounded bg-gray-700 text-white"
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="flex-grow p-2 rounded bg-gray-700 text-white"
        />
        <button type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
        >Add Todo</button>
      </form>
      <TodoList />
      </div>
    </div>
  );
};

export default App;
