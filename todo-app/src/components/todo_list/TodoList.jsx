import { useState } from "react";

import "./TodoList.css";
import TodoInput from "../todo_input/TodoInput";
import TodoItem from "../todo_item/TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  return (
    <div className="todo-list-container">
      <h2>My Todos</h2>
      <TodoInput todos={todos} setTodos={setTodos} />
      <div className="todo-items-wrapper">
        {todos.map((item, index) => {
          return (
            <TodoItem
              todos={todos}
              setTodos={setTodos}
              index={index + 1}
              key={item.id}
              todo={item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodoList