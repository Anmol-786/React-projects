import React from 'react';
import { useState } from 'react';

const Contact = ()=>{
    const [info,setInfo] = useState({
        fname:"",
        phone:"",
        email:"",
        msg:""
    })
    const inputEvent = (e)=>{
        const {name,value} = e.target;

        setInfo((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }
    const sub = (e)=>{
        e.preventDefault();
        alert(` Thanks ${info.fname}, your details have been submitted succesfully, our team will contact you in a while`);
    }
    return(
        <>
        <div className="my-5">
            <h2 className="text-center">Contact Us</h2>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={sub}>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Fullname</label>
                    <input type="text" name="fname"  autoComplete='off' required value={info.fname} className="form-control" onChange={inputEvent} id="exampleFormControlInput1" placeholder="Enter your name"/>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Phone number</label>
                    <input type="text" name="phone" autoComplete='off' required  value={info.phone} className="form-control" onChange={inputEvent} id="exampleFormControlInput1" placeholder="Enter your contact number"/>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlInput1">Email address</label>
                    <input type="email" name="email"  autoComplete='off' required value={info.email} className="form-control" onChange={inputEvent} id="exampleFormControlInput1" placeholder="name@example.com"/>
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" name="msg"  autoComplete='off' required value={info.msg} onChange={inputEvent} id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="col-auto">
                    <button type="submit" class="btn btn-outline-primary mt-2">Submit</button>
                </div>
                </form>
                </div>
            </div>
        </div>
        </>
    )
}
export default Contact;