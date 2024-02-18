import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from './../redux/todo/todoAction';

const TodosList = () => {
  const dispatch = useDispatch();
  const {loading, todos, error } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if(loading) return <div> Loading..... </div>
  if(error) return <div>{error.message}</div>

  return (
    <>
      <div>Todo List</div>
      <div>
        {todos.map((todo) => {
          return <div key={todo.id}>{todo.title}</div>
        })}
      </div>
    </>
    
  )
}

export default TodosList;