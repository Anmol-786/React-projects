import React from 'react';
import Sdata5 from './Sdata5';
import App_logo from './App_logos';
const Apps = (props)=>{
    return(
        <>
       
        <div className="app_title">
        <h3 className="app_head">{props.title}</h3>
            {
            Sdata5.map((val,idx)=>{
                    return (<App_logo key ={idx} id={val.id} img_src={val.img_src} />)
                })
        }
        </div>
        </>
    )
}
export default Apps;