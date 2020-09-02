import React from 'react'
import Upper from './Upper';
import Lower from './Lower';

const Bundles = (props)=>{
return(
    <>
        {
            props.id===1?
            <Upper img_src={props.img_src} img_name={props.img_name} img_info={props.img_info}/>:
            <Lower img_src={props.img_src} img_name={props.img_name} img_info={props.img_info}/>
        }
    </>
)
}
export default Bundles;