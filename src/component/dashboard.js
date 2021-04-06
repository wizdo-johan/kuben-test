import React from 'react'
import MainFilters from './mainFilters'
import Barchart from './barchart'

const Dashboard = (props) => {
    return (
        <div>
            <MainFilters setNr={props.setNr}/>
            <Barchart nr={props.nr} />
        </div>
    )
}

export default Dashboard
