import React, { Component } from 'react';

class AddTodo extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             content:''
        }
    }

    handleInput = (e) => {
       this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit = () => {
       this.props.addTodo(this.state);
       this.setState({content:''})
    }
    render() {
        return (
            <div>
                <input type="text" name="content" value={this.state.content} onChange={this.handleInput}/>
                <button onClick={this.handleSubmit}>Add</button>
            </div>
        );
    }
}

export default AddTodo;