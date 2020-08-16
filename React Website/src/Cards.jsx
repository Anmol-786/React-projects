import React from 'react';
import { NavLink } from 'react-router-dom';

var Cards = (props)=>{
    return (
        <>
        <div className="col-md-4 col-10 mx-auto">
        <div className="card">
        <img src={props.img_src} class="card-img-top" alt={props.img_src}/>
        <div className="card-body">
        <h5 className="card-title">{props.img_name}</h5>
        <p className="card-text">{props.img_info}</p>
            <NavLink to="#" className="btn btn-primary">Get Started</NavLink>
            </div>
        </div>
        </div>
        </>
    //    <div>
    //        <img src={props.img_src} alt={props.img_src} className="img_clss"/>
    //        <div className="card_info">
    //         <h4>{props.img_name}</h4>
    //         <p>{props.img_info}</p>
    //        </div>
    //    </div>
    )
}

export default Cards;