// import React, { Component } from 'react';

// class WelcomeV extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//              like :0
//         }
//     }
     
//     changeMessage = () => {
//         let increment = this.state.like + 1
//         this.setState({
//          like: increment
//          })
//     }
    
//     render() {
       
//         return (
//             <div>
//                 <p>{this.state.like}</p>
//                 <button onClick={() => this.changeMessage()}>Update</button>
//             </div>
//         );
//     }
// }

// export default WelcomeV;

// *************************************
import React from 'react';

function WelcomeV(){
    function handle(){
        console.log('button click');
    }
    return(
        <>
        <button onClick={() => handle()}>Event btn</button>
        </>
    )
}

export default WelcomeV;