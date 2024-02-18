import { FETCH_TODOS_ERROR, FETCH_TODOS_LOADING, FETCH_TODOS_SUCCESS } from './todoActionType';

const initateState = {
  loading: false,
  todos: [],
  error: null,
}

export default function todoReducer(state = initateState, action) {
  switch(action.type) {
    case FETCH_TODOS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        todos: action.payload,
      };

    case FETCH_TODOS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
}