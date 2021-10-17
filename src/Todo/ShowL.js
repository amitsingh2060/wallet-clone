import React, { Component } from 'react';

class ShowL extends Component {
    // constructor(props) {
    //     super(props)
    
    //     this.state = {
             
    //     }
    // }
    
    render() {

        // const todoList = this.props.todos.length ? (
        //     this.props.todos.map(e => {
        //          return(
        //              <div key={e.id}>
        //                  <h1>{e.content}</h1>
        //                  <button onClick={() =>this.props.deletTodo(e.id)}>remove</button>
        //              </div>
        //          )
        //      })
        //  ) : <p>nothing</p>

        // const todoList = this.props.todos.length ? (
        //     this.props.todos.map(e => {
        //         return (
        //             <div>
        //                 <h1>{e.content}</h1>
        //             </div>
        //         )
        //     })
        // ) : <p>nothing</p>
        // console.log(this.props.todos,"ddddddddddddddddddd");
      let todoList = this.props.todos.length ? (
          this.props.todos.map(e => {
              return (
                  <div>
                      <h1>{e.content}</h1><button onClick={() => this.props.delTodo(e.id)}>Remove</button>
                  </div>
              )
          })
      ) : <p>
          nothing
      </p>


        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default ShowL;