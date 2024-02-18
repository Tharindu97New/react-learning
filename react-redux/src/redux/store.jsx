import { applyMiddleware, combineReducers,  createStore, compose  } from "redux";
import fruitReducer from "./fruit/fruitReducer";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import todoReducer from "./todo/todoReducer";


const rootReducer = combineReducers({
  fruit: fruitReducer,
  todo: todoReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(thunk, logger)));

export default store;