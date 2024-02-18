import axios from "axios"
import { FETCH_TODOS_ERROR, FETCH_TODOS_LOADING, FETCH_TODOS_SUCCESS } from "./todoActionType";

function fetchLoading(isLoading) {
  return {
    type: FETCH_TODOS_LOADING,
    payload: isLoading,
  };
}

function fetchSuccess(data) {
  return {
    type: FETCH_TODOS_SUCCESS,
    payload: data,
  };
}

function fetchError(error) {
  return {
    type: FETCH_TODOS_ERROR,
    payload: error,
  };
}


export function fetchTodos() {
  return async function (dispatch, getState) {
    dispatch(fetchLoading(true));
    try {
      const result = await axios.get("https://jsonplaceholder.typicode.com/todos");
      dispatch(fetchSuccess(result.data));
    } catch (error) {
      dispatch(fetchError(error));
    }
    dispatch(fetchLoading(false));
    
  }
}