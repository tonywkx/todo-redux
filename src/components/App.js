import React from "react";

import {Route, Routes} from 'react-router-dom'
import Nav from "../pages/Nav";
import { ProjectPage } from "../pages/ProjectPage";
import { TodoPage } from "../pages/TodoPage";


function App() {
  return (
    <>
    <Nav/>  
    <Routes>
      <Route path="/project" element={<ProjectPage/>} ></Route>
      <Route path="/" element={<TodoPage/>}></Route>
    </Routes>
    
    </>
    
  )
    
}

export default App;