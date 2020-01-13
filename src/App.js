import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';

const items = [];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      itemList: items
    }
  }

 addTodo = todo => {
   const newTodo = {
     name: todo,
     id: Date.now(),
     completed: false
   }
   this.setState({
     itemList: [...this.state.itemList, newTodo]
   })
 }

 toggleItem = (id) => {
  const newTodoList = this.state.itemList.map(item => {
      if (item.id === id){
          return {...item,  completed: !item.completed}
      } else {
        return item;
      }
  })
  this.setState({itemList: newTodoList})
}
removeCompleted = () => {
  const openTodoList = this.state.itemList.filter( item => item.completed === false)
  this.setState({
    itemList: openTodoList
  })
}
  render(){
    console.log(this.state.itemList)
    return (
      <div>
        <h2>Welcome to My Todo App!</h2>
        <TodoForm addTodo = {this.addTodo}/>
        <TodoList 
          itemList={this.state.itemList}
          toggleItem = {this.toggleItem}
          removeCompleted = {this.removeCompleted}
        />
      </div>
    )
  }
   
  
}

export default App;
