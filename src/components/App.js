import React from "react";

import VisibleTodoList from '../containers/VisibleTodoList'
import AddTodo from '../containers/AddTodo'



function App() {
  return (
    <div className="container">
      <h1>Hello redux</h1>
      <AddTodo/>
      <VisibleTodoList/>
    </div>
  );
}

export default App;