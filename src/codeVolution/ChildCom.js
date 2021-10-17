import React from 'react'

function ChildCom(props) {
    return (
        <div>
            <p>child</p>
            <button onClick={() => props.greet("childldld")}>Click to parent</button>
        </div>
    )
}

export default ChildCom
