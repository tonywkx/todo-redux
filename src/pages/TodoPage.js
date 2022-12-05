import React, { useState } from "react";
import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'
import { Modal } from "../components/modal/Modal";


export function TodoPage() {

  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="container">
      
      <button className="open-modal" onClick={() => setModalActive(true)}> Create new Todo</button>
      <Modal active={modalActive} setActive={setModalActive}>
        <AddTodo active={modalActive} setActive={setModalActive}/>
      </Modal>
      <TodoList/>
    </div>
  )
 
}




