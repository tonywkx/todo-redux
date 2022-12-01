/* eslint-disable no-unused-vars */
import React from "react";
import {connect } from 'react-redux'
import {addTodo} from '../actions/index'

 
const AddTodo =({ dispatch }) => {
    let input;

    return (
        <div>
            add todo
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
                <button type="submit">AddTodo</button>
            </form>
        </div>
    )
}

export default connect()(AddTodo)