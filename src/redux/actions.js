import axios from 'axios';

export const getTodos = () => async dispatch => {
  const response = await axios.get('http://localhost:8092/api/todos');
  dispatch({ type: 'GET_TODOS', payload: response.data });
};

export const addTodo = (todo) => async dispatch => {
  const response = await axios.post('http://localhost:8092/api/todos', todo);
  dispatch({ type: 'ADD_TODO', payload: response.data });
};

export const deleteTodo = (id) => async dispatch => {
  await axios.delete(`http://localhost:8092/api/todos/${id}`);
  dispatch({ type: 'DELETE_TODO', payload: id });
};

export const completeTodo = (id) => async dispatch => {
  const response = await axios.put(`http://localhost:8092/api/todos/${id}`, { completed: true });
  dispatch({ type: 'COMPLETE_TODO', payload: response.data });
};
