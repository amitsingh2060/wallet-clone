import axios from 'axios';
import React, { Component } from 'react';

class Fetch extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[]
        }
    }
    componentDidMount() {
        axios.get('https://reqres.in/api/users/1')
             .then(res => {
                 const data = res.data.data
                 this.setState({data})
             }) 
    }
    
    render() {
        const { avatar, email} = this.state.data
        console.log(this.state.data);
        return (
            <div>
                {email}
                <img src={avatar}/>
            </div>
        );
    }
}

export default Fetch;