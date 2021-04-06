import React from 'react'

const Checkbox = (props) => {
    return (
        <div>
            <button onClick={() =>props.setNr(Math.random())}>Random</button>
        </div>
    )
}

export default Checkbox
