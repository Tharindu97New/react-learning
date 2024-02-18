import { Provider } from "react-redux"
import store from "./redux/store";
import './App.css';
import FruitSections from "./components/FruitSections";
import TodosList from "./components/TodosList";


function App() {
  return (
    <Provider store={store} >
       <div className="App">
        <h1>MyRedux Project</h1>
        <FruitSections />
        <TodosList />
      </div>
    </Provider>
  );
}

export default App
