import axios from 'axios';
import React, { Component } from 'react';

class Virtusa extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             input_1:'',
             input_2:'',
             output_1:'',
             output_2:'',
             userid:'',
             userEmail:'',
        }
    }
    handleInput = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    comapreField = () => {
        this.state.output_1 = '';
        this.state.output_2 =   '';
        let output_1 = this.state.input_1;
        let output_2 = this.state.input_2;
        for(let i=0; i<this.state.input_2.length; i++){
            output_1 = output_1.replace(this.state.input_2[i], '')
        }
        for(let j=0; j<this.state.input_1.length; j++){
            output_2 = output_2.replace(this.state.input_1[j],'')
        }
        
        this.setState({output_1});
        this.setState({output_2});
    }
    callApi = () => {
        axios.get(`https://reqres.in/api/users/${this.state.userid}`)
             .then(res => {
                 let data = res.data.data;
                 let userEmail = data.email;
                 this.setState({userEmail})
             })
    }
    
    render() {

        return (
            <div>
                <h1>Virtusa Program 1</h1>
                <label>Input_1</label>
                <input type="text" name="input_1" value={this.state.input_1} onChange={this.handleInput}/>
                <label>Input_2</label>
                <input name="input_2" value={this.state.input_2} onChange={this.handleInput}/>

                <button  onClick={() => this.comapreField()} >Submit</button>
                <h1>output_1: {this.state.output_1}</h1>
                <h1>output_2:{this.state.output_2}</h1>

                <h1>**********************************************************</h1>
                <h1>Program 2</h1>
                <label>User Id :</label>
                <input name="userid" value={this.state.userid} onChange={this.handleInput}/>
                <button onClick={this.callApi}> call Api </button>
                <h1>Email id: {this.state.userEmail}</h1>
            </div>
        );
    }
}

export default Virtusa;