import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = ({actve, setActive}) => {
  const [title, setTitle] = useState(undefined);
  
  const dispatch = useDispatch();

  return (
    <div className="addtodo-container">
      <input className="add-input" type='text' placeholder="Введите заголовок..." onBlur = {(e) => {
        setTitle(e.target.value)
        e.target.value = ""
      }} />

      <input className="add-input" type='text' placeholder="Введите описание..." ></input>
      <input className="add-input" type='date'></input>
      <input className="add-input" type='text' placeholder="Введите приоритет задачи..."></input>
      <input className="add-input" type='file' ></input>
      <p className="add-input">Подзадача</p>

      <button className="addtodo-button" onClick={() => {
        dispatch(addTodo(title))
        setActive(false)
      }}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;