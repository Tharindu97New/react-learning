import {  FETCH_TODOS_LOADING, FETCH_TODOS_SUCCESS } from './todosAction';

const initialState = {
  todos: [],
  loading: false,
}

function todoReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_TODOS_LOADING:
      return {
        ...state,
        loading: true,
      }
    
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload
      }

    default:
      return state;
  }
}

export default todoReducer;