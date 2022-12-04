/* eslint-disable no-unused-vars */
import React from "react";
import {connect } from 'react-redux'
import {addTodo} from '../actions/index'

 
const AddTodo =({ dispatch }) => {
    let input;

    return (
        <div>
            Add todo
            <form
             onSubmit={
                e => {
                    e.preventDefault();

                    if(!input.value.trim()){
                        return
                    }
                    dispatch(addTodo(input.value));
                    input.value = '';

                }
             }
            >
                <input type='text' ref={el => (input = el)}/>
                {/* <input
                    type="text"
                    placeholder="Введите заголовок..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Введите описание..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <input
                    type="file"
                    multiple={true}
                    ref={fileInput}
                    onChange={handleChange}
                />
                <input 
                    type="date" 
                    value={date} 
                    onChange={(e) => setDate(e.target.value)}
                /> */}
                <button type="submit" className="addtodo-button">AddTodo</button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)