// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'


const TodoList = (props) => {
    console.log(props.toggleItem);
    const showButton = props.itemList.filter(item => item.completed === true)
    console.log(showButton)
    return (    
        <React.Fragment>
            <div className='todo-list'>
                
                
                {props.itemList.map(item => (
                <Todo 
                    key={item.id} 
                    item={item}
                    toggleItem = {props.toggleItem} />
                ))}
                
            
            </div>
            <button className='clr-btn' onClick={props.removeCompleted} disabled={showButton.length===0 ? true : false}> Clear Completed </button>
        </React.Fragment>
    )
}
export default TodoList;