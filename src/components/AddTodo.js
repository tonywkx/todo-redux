import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
/* import dayjs from 'dayjs'; */

const AddTodo = ({actve, setActive}) => {

  const initialValues = {
    title: '',
    text: '',
    creationDate: '',
    inworkTime: '',
    date: '',
    priority: '',
    files: null
  };
 
  const fileInput = useRef(null);

  const [fullTodo, setFullTodo] = useState(initialValues)

  const handleInputChange = (e) => {
    e.preventDefault()
    //const name = e.target.name 
    //const value = e.target.value 
    const { name, value } = e.target;

    setFullTodo({
      ...fullTodo,
      [name]: value,
    });
  };
  
  const dispatch = useDispatch();

  const getCreationTime = () =>{
    let now = new Date().getTime()
    fullTodo.creationDate = now
  }

  const handleInWorkTime = () => {
    let now = new Date().getTime()
    let time = fullTodo.creationDate - now;
    fullTodo.inworkTime = time;
  }

  const handleFileChange = ({target}) => {
    const fileNames  = Array.from(target.files).map(file => file.name)
    fullTodo.files = fileNames
  }

  return (
    <div className="addtodo-container">
      <input className="add-input" type='text' placeholder="Введите заголовок..." value={fullTodo.title} name='title' onChange={handleInputChange}/* onBlur = {(e) => {
        setTitle(e.target.value)
        e.target.value = ""
      }} */ />

      <input className="add-input" type='text' placeholder="Введите описание..."  value={fullTodo.text} name='text' onChange={handleInputChange}></input>
      <input className="add-input" type='date' value={fullTodo.date} name='date' onChange={handleInputChange}></input>
      <input className="add-input" type='text' placeholder="Введите приоритет задачи..." value={fullTodo.priority} name='priority' onChange={handleInputChange}></input>
      <input className="add-input" type='file' 
      multiple={true}
      ref={fileInput}
      onChange={handleFileChange}
      />


      <button className="addtodo-button" type="submit" onClick={() => {
        getCreationTime()
        handleInWorkTime()
        dispatch(addTodo(fullTodo))
        
        setActive(false)
      
      }}>
        Add Todo
      </button>
    </div>
  );
};

export default AddTodo;