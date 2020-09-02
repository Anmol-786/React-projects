import React from 'react';

import {NavLink} from 'react-router-dom';

const Lower = (props)=>{
    return(
        <>
         <div className="card lower_card">
         <img src={props.img_src} alt={props.img_src}/>
            <div className="card-body">
            <h5 className="card-title">{props.img_name}</h5>
            <p className="card-text">{props.img_info}</p>
            <NavLink to="#" className="nav_link">Learn More</NavLink>
            </div>
        </div>
        </>
    )
}
export default Lower;