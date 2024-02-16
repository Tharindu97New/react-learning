import axios from "axios";

export const FETCH_TODOS_LOADING = "FETCH_TODOS_LOADING";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";

function fetchLoading() {
  return {
    type: FETCH_TODOS_LOADING,
  }
}

function fetchSuccess(todos) {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: todos
  }
}


export function fetchTodos() {
  return async function  (dispatch, getState)  {
    dispatch(fetchLoading());
    const result = await axios.get("https://jsonplaceholder.typicode.com/todos");
    dispatch(fetchSuccess(result.data));
  };
}
