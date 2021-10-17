import React, { Component } from 'react';

class Wish extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            // priority:1
            pri:1
        }
    }
    handleChange = (e) => {
        let pri= e.target.value
        this.setState({pri})
        // const {name,value} = e.target
        // this.setState({[name]:value})
    }
    render() {
        return (
            <div>
                
                <select
                    name="pri"
                    value={this.state.pri}
                    onChange={(e) => this.handleChange(e)}
                    >
                
                    {/* {[1, 2, 3, 4, 5].map((val) => (
                        <option value={val} id={val} key={val}>
                            {val}
                        </option>
                    ))} */}

                    {[1,2,3,4].map(e => {
                        return(
                            <option value={e}>{e}</option>
                        )
                    })}
                </select>
          <h1>{this.state.pri}</h1>
            </div>
        );
    }
}

export default Wish;