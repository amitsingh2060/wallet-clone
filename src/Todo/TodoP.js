import React, { Component } from 'react';
import AddTodo from './AddTodo';
import ShowL from './ShowL';

class TodoP extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             todos : [
                 {id:1, content:"bread"},
                 {id:2, content:"milk"}
             ]
        }
    }
    
    delTodo = (id) => {
       let todos = this.state.todos.filter(e => e.id !==id);
       this.setState({todos})
    }
    addTodo = (todo) => {
    

    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
    }
    render() {
        return (
            <div>
                <ShowL todos={this.state.todos} delTodo={this.delTodo}/>
                <AddTodo addTodo={this.addTodo}/>
            </div>
        );
    }
}

export default TodoP;