import React from 'react';

import Cards from './Cards';
import Sdata1 from './Sdata1'
import Sdata2 from './Sdata2';
const Common = (props)=>{
    return(
        <>
        <div className="outer_common">
        <p className="text-center" style={{letterSpacing:"2px"}}>{props.text}</p>
        
        <div className="common">
        {
            props.number == 1?
            Sdata1.map((val,idx)=>{
                return (<Cards key ={idx} id={val.id} img_src={val.img_src} img_name={val.img_name} img_info={val.img_info} />)
            }):
            Sdata2.map((val,idx)=>{
                return (<Cards key ={idx} id={val.id} img_src={val.img_src} img_name={val.img_name} img_info={val.img_info} />)
            })
        }
        </div>
        </div>
        </>
    )
}
export default Common;