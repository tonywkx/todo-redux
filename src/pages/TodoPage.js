import React from "react";

import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'



export function TodoPage() {
  return (
    <div className="container">
      <h1>Hello redux</h1>
      <AddTodo/>
      <VisibleTodoList/>
    </div>
  );
}

