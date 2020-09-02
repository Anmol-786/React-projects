import React from 'react';

import {NavLink} from 'react-router-dom';
import Bigger from './BiggerCard';
import Smaller from './Smaller';
const Cards = (props)=>{
    return(
        <>
            
            { 
            props.id==1?
            <Bigger img_src={props.img_src} img_name={props.img_name} img_info={props.img_info}/>:
            <Smaller img_src={props.img_src} img_name={props.img_name} img_info={props.img_info}/>
            }
        </>
    )
}
export default Cards;