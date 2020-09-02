import React from 'react';

import Sponsors from './Sponsors';
const Partners = (props)=>
{
    return(
        <>
            <Sponsors img_src={props.img_src} img_name={props.img_name}/>
        </>
    )
}
export default Partners;