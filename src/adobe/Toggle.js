import React from 'react'

function Toggle(props) {
    console.log(props.isShowBtn);
    return (
        <div>
            <h1> Adobe Table</h1>
            <ul>
               {
                   !props.isShowBtn && 
                   <span>
                      <li>Header</li> 
                      <li>Nav</li>
                      <li>Menu</li>
                      <li>SubMenu</li>
                   </span>
               }
            </ul>
        </div>
    )
}

export default Toggle
