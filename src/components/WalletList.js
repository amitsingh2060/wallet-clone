import React, { Component } from 'react';
import { connect } from 'react-redux';

class WalletList extends Component {

    render() {
        console.log(this.props.WalletListt);
        return (
            <div>
                <table>
                  <thead>
                    <tr >
                        <td><b>Name</b></td>
                        <td><b>Phone</b></td>
                        <td><b>Balance (Rs)</b></td>
                    </tr>
                  </thead>
        <tbody>
         {
             this.props.WalletListt && 
             this.props.WalletListt.map((item,key) => {
                 return (
                     <tr key={key}>
                         <td>{item.name}</td>
                         <td>{item.phone}</td>
                         <td>{item.bal}</td>
                     </tr>
                 )
             })
         }
        </tbody>
      </table>
            </div>
        );
    }
}

const mapStateToProps = stat => {
    return {
        WalletListt:stat.arrWallet,
    }
}

export default connect(mapStateToProps)(WalletList);