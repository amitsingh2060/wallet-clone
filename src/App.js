import React, { Component } from 'react';
import Button from './adobe/Button';
import Toggle from './adobe/Toggle';
import './App.css';
import Fetch from './components/Fetch';
import Header from './components/Header';
import WalletList from './components/WalletList';
import Virtusa from './virtusa/Virtusa';
import Appp from './codeVolution/App'
import Unify from './unify/Unify';
import TodoP from './Todo/TodoP';
import Wish from './Wish';
// function App() {
//   return (
//     <div>
       
//     </div>
//   );
// }

// export default App;



class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isShowBtn: false
    }
  }
  handleBtnChange = () => {
    let btn = !this.state.isShowBtn;
    this.setState({isShowBtn:btn})
  }
  render() {
    return (
      <div>
         <h1>Om</h1>
         <Wish/>
        {/* <Header/> */}
        {/* <WalletList/> */}
        {/* <Fetch/> */}
        <Toggle isShowBtn={this.state.isShowBtn}/>
        <Button handleBtnChange={this.handleBtnChange}/>
        <TodoP/>
        {/* <Virtusa/> */}
        {/* <Appp/> */}
        <Unify/>
      </div>
    );
  }
}

export default App;


// function App() {
//   const [state, setstate] = useState(false);
  
//   const handleBtnChange = () => {
//     let test = !state;
//     setstate(test)
//   }
//   return (
//     <div>
//       <HuseState isShowBtn={state} />
//       <Counter handleBtnChange={handleBtnChange}/>
//       <Demo/>
      
//     </div>

//   )
// }

// export default App;
