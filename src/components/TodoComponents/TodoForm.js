import React from 'react'


class TodoForm extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            todoText: ''
        }
    }
    
    
    handleChange = (e) => {
        this.setState({
            todoText: e.target.value
        })
    }

    handleSubmit= e =>{
        e.preventDefault();
        this.props.addTodo(this.state.todoText);
        this.setState({
            todoText: ''
        })
       
    }

    

  

   
   
    
    render(){
        
      return (
        <form onSubmit= {this.handleSubmit}>
        <input 
            type='text'
            name='name'
            value= {this.state.todoText}
            onChange = {this.handleChange}

        />
        <button>Add</button>
        </form>
      )
    }
}

export default TodoForm;