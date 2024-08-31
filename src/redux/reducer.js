const initialState = {
    todos: []
  };
  
  const todosReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_TODOS':
        return { ...state, todos: action.payload };
      case 'ADD_TODO':
        return { ...state, todos: [...state.todos, action.payload] };
      case 'DELETE_TODO':
        return { ...state, todos: state.todos.filter(todo => todo._id !== action.payload) };
      case 'COMPLETE_TODO':
        return { ...state, todos: state.todos.map(todo => todo._id === action.payload._id ? action.payload : todo) };
      default:
        return state;
    }
  };
  
  export default todosReducer;
  