import React, { Component } from 'react';
import ChildCom from './ChildCom';

class Parent extends Component {

    greet = (e) => {
        // alert('hello')
        console.log(e);
    }
    render() {
        return (
            <div>
                <p>Parent</p>
                <ChildCom  greet={this.greet}/>
            </div>
        );
    }
}

export default Parent;