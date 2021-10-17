import React, { Component } from 'react';

class Unify extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       count:0,
       isShow: true,
    }
  }
  
  tick = () => {
   this.interval =  setInterval(() => {
      this.setState({count:this.state.count + 1})
    }, 500);
  }
  componentDidMount() {
   this.tick()
  }
  
  stop = () => {
    if(this.state.isShow){
      clearInterval(this.interval)
    } else  {
      this.tick()
      
    }
    let isShow = !this.state.isShow;
    this.setState({isShow})
  }
  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.stop}>{this.state.isShow ? "STop" : 'Start'}</button>
      </div>
    );
  }
}

export default Unify;