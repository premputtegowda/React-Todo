// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'
import "./Todo.css";

const TodoList = (props) => {
    console.log(props.toggleItem);
    return (
        <div className='todo-list'>
            
            To Do List
            {props.itemList.map(item => (
             <Todo 
                key={item.id} 
                item={item}
                toggleItem = {props.toggleItem} />
            ))}
            
        <button onClick={props.removeCompleted}> Clear Completed </button>
        </div>
    )
}
export default TodoList;