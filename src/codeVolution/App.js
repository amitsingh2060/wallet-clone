import React, { Component } from 'react';
import Parent from './Parent';
import WelcomeV from './WelcomeV';

class Appp extends Component {
    render() {
        return (
            <div>
               <h1> CodeVolution</h1>
               <WelcomeV name="OM" add="Sai"/>
               <Parent/>
            </div>
        );
    }
}

export default Appp;