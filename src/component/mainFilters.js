import React from 'react'
import Chekbox from './checkbox'

const MainFilters = (props) => {
    return (
        <div>
            <Chekbox setNr={props.setNr} />
        </div>
    )
}

export default MainFilters
