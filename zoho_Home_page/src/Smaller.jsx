import React from 'react';

import {NavLink} from 'react-router-dom';
const Smaller = (props)=>{
    return(
        <>
        <div className="card smaller_card">
        <img src={props.img_src} alt={props.img_src}/>
            <div className="card-body">
            <h5 className="card-title">{props.img_name}</h5>
            <p className="card-text">{props.img_info}</p>
            <button type="button" to="#" class="btn btn-outline-primary">SIGN UP NOW</button>
            </div>
        </div>
        </>
    )
}
export default Smaller;