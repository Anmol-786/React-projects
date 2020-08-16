import React from 'react';
import {NavLink} from 'react-router-dom';
const Common = (props)=>{
    return (
        <>
         <div className="main_div">
            <div className="text_div">
    <p className="para">{props.heading}<span className="brand">{props.brand_name}</span></p>
            <p>{props.desc}</p>
            <NavLink className="btn_started" to={props.to}>{props.btn}</NavLink>
            </div>
            <img className="img_home" src={props.img_src} alt="image"/>
        </div>
        </>
    )
}
export default Common;