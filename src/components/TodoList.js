import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";
import { getTodos } from "../redux/selectors";


const TodoList = () => {
  
  const allTodos = useSelector(getTodos);
  const todos = allTodos
      

  return (
    <ul className="todo-list">
      {todos && todos.length 
        ? todos.map(todo => {
            return <Todo key={todo.id} todo={todo} />;
          })
        : "No todos"}
    </ul>
    
  );
};

export default TodoList;