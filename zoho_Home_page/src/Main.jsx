import React from 'react'

import { Switch, Route, Redirect, NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './app_style.css'
import Common from './Common'
import Bundles from './Bundles';
import Sdata3 from './Sdata3';
import All_apps from './All_apps';
import Partners from './Partners';
import Video from './Video';
import Sdata4 from './Sdata4';
import Footer from './Footer';
const Main = ()=>{
    return( 
        <>
        <Navbar/>
        <Switch>
            <Redirect to="/"/>
        </Switch>
        {/* <Common/> */}
        <br/>
        <div className="main_heading">
            <h1 id="heading">Your Life's Work, Powered By Our Life's Work</h1>
            <br/>
            <h5 style={{fontWeight:"500"}}>Unique and powerful suite of software to run your entire business, brought to you by a </h5>
            <h5 style={{fontWeight:"500"}} id="second_head">company with the long term vision to transform the way you work.</h5>
            <Common text="Featured App" number={1}/>
            <Common text="Work Remotely With" number={2}/>
            <h5 className="text-center" style={{letterSpacing:"2px"}}>BUNDLES</h5>
            <div className="bundles_container">
            {
                
                Sdata3.map((val,idx)=>{
                return (<Bundles key ={idx} id={val.id} img_src={val.img_src} img_name={val.img_name} img_info={val.img_info} />)
            })
            }
            </div>
            <h5 className="text-center" style={{letterSpacing:"2px"}}>All Apps</h5>
            <All_apps/>
           <h1>Trusted by more than 50 million users globally</h1>
           <div className="partner_container">
               <Video/>
               {
                Sdata4.map((val,idx)=>{
                        return (<Partners key ={idx} id={val.id} img_src={val.img_src} img_name={val.img_name}/>)
                    })
            }
            <NavLink to="#">More Customers</NavLink>
            </div>
            </div>
            <Footer/>
            
        </>
    )
}
export default Main;