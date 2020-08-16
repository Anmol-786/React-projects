import React from 'react';
import Home from './Home';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './design.css';


const Main = ()=>{
    return( 
        <>
        <Navbar/>
        <Switch>
            <Route exact path="/about" component={About}/>
            <Route exact path="/" component={Home}/>
            <Route exact path="/services" component={Services}/>
            <Route exact path="/contact" component={Contact}/>
            <Redirect to="/"/>
        </Switch>
        </>
    )
}
export default Main;