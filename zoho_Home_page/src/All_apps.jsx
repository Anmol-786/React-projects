import React from 'react';
import Apps from './Apps';
const All_apps = (props)=>
{
    return(
        <>
        <div className="app_grid">
            <Apps title="Sales and Marketing"/>
            <Apps title="Email and Collaboration"/>
            <Apps title="Finance"/>
            <Apps title="IT and Help Desk"/>
            <Apps title="Business Intelligence"/>
            <Apps title="Custom Solutions"/>
        </div>
        </>
    )
}
export default All_apps;