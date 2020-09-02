import React from 'react';

import {NavLink} from 'react-router-dom';


const Navbar = ()=>{
    return(
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">

            
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" exact to="/">ZOHO LOGO</NavLink>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button> */}

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
                <NavLink exact activeClassName="nav" className="nav-link" to="/">Customer <span className="sr-only">(current)</span></NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact activeClassName="nav" className="nav-link" to="/support">Support</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact activeClassName="nav" className="nav-link" to="/contact">Contact Sales</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact activeClassName="nav" className="nav-link" to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact activeClassName="nav" id ="signup" className="nav-link" to="/signup">Free Sign Up</NavLink>
            </li>
            </ul>
        </div>
        </nav>
        </div>
        </div>
        </div>
        </>
    )
}
export default Navbar;