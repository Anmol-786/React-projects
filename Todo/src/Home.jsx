import React from 'react';
import { NavLink } from 'react-router-dom';
import Common from './Common';
const Home = ()=>{
    return(
        <>
        {/* <div className="main_div">
            <div className="text_div">
            <p className="para">Grow your Buisness with<span className="brand">Coding Freaks</span></p>
            <p>We are Competitive programming Enthusiast with passion for Data structures and Algorithms</p>
            <NavLink className="btn_started" to="/services">Get Started</NavLink>
            </div>
            <img className="img_home" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmiPU-HVVvFNKSwYCeR5ShrHJj8F0jB8vwjA&usqp=CAU" alt="image"/>
        </div> */}
        <Common heading="Improve Your Skills with " brand_name="Coding Freaks" desc="We are Competitive programming Enthusiast with passion for Data structures and Algorithms" btn="Get Started" to="/services" img_src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmiPU-HVVvFNKSwYCeR5ShrHJj8F0jB8vwjA&usqp=CAU"/>
        
        </>
    )
}
export default Home;