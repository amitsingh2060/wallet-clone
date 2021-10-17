import React from 'react'

function Button({handleBtnChange}) {
    return (
        <div>
            <button onClick={() => handleBtnChange()}> Show & Hide</button>
        </div>
    )
}

export default Button
