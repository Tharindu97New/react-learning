import { createStore, combineReducers, applyMiddleware } from "redux";
import fruitReducer from "./redux/fruitSection/fruitReducer";
import pharmacyReducer from "./redux/pharmacySection/pharmacyReducer";
import { addFruit } from "./redux/fruitSection/fruitAction";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import todoReducer from "./redux/todos/todosReducer";
import { fetchTodos } from "./redux/todos/todosAction";

const rootReducer = combineReducers({
  fruit: fruitReducer,
  pharmacy: pharmacyReducer,
  todo: todoReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));



store.dispatch(fetchTodos());

















// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
