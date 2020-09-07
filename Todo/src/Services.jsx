import React from 'react';
import Sdata from './Sdata';
import Cards from './Cards';
const Services = ()=>{
    return(
        <>
        <div className='my-5'>
           <h1 className="text-center tit">Our Services</h1>
           </div>
           <div className="container-fluid mb-5">
               <div className="row">
                   <div className="col-10 mx-auto">
                       <div className="row gy-4">
                        {
                            Sdata.map((val,idx)=>{
                                return (<Cards key ={idx} img_src={val.img_src} img_name={val.img_name} img_info={val.img_info} />)
                            })
                        }
                        </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Services;