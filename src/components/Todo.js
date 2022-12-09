import React from "react";
import { useDispatch } from "react-redux";
import cx from "classnames";
// import { getTodoById } from "../redux/selectors";
import { toggleTodo } from "../redux/actions";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  return (
    <div className="todo-item" onClick={() => dispatch(toggleTodo(todo.id))}>
      {todo && todo.completed ? "✅" : "❗"}{" "}
      <span>{todo.id}</span>
      <span
        className={cx(
          "todo-item__text",
          todo && todo.completed && "todo-item__text--completed"
        )}
      >
        {todo.content.title}
      </span>
      <span>
        {todo.content.text}
      </span>
      <div>
        {todo.content.creationDate}
      </div>
      <div>
        {todo.content.inworkTime}
      </div>
      <span>
        {todo.content.date}
      </span>
      <span>
        {todo.content.priority}
      </span>
      <div>
        {todo.content.files}
      </div>
      <div>
      {todo && todo.completed ? "Status: completed" : "Status: in Progress"}
      </div>
      <input type='text' placeholder="Add semi task...."></input>
    </div>
  );
};

export default Todo;