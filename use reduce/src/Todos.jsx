import { useReducer } from 'react';
const TODOS_ACTIONS={
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
}

const initialState = [];
function reducer(state, action) {
  switch (action.type) {
    case TODOS_ACTIONS.ADD_TODO:
      return [...state, { id: state.length + 1, name: action.payload }];
    case TODOS_ACTIONS.DELETE_TODO:
      return state.filter((task) => task.id !== action.payload);
    default:
      return state;
  }
}

const Todos = () => {
  const [tasks, dispatch] = useReducer(reducer, initialState);

  const addTask = (e) => {
    if (e.key === 'Enter') {
      dispatch({ type: TODOS_ACTIONS.ADD_TODO, payload: e.target.value });
      e.target.value = ''; // clear input field after adding task
    }
  };

  return (
    <>
      <h3>Task List ({tasks.length})</h3>
      <label htmlFor="">Enter Task</label>
      <input type="text" onKeyDown={(e) => addTask(e)} />
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}{' '}
            <button onClick={() => dispatch({ type: TODOS_ACTIONS.DELETE_TODO, payload: task.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;