import React from 'react';
import { useState } from 'react';

const Forms = ()=>{

    // const [fname,new_fname] = useState("");
    // const [outfname,new_outfname] = useState("");
    
    // const [lname,new_lname] = useState("");
    // const [outlname,new_outlname] = useState("");

    const[fullName,setfullName] = useState({
        fname:"",
        lname:"",
        email:""
    })

    const input_event = (e)=>{

        const {name,value} = e.target;
        setfullName((prev)=>{
            return{
                ...prev,
                [name]:value
            }
        })
    }
    
    // const input_event1 = (e)=>{
    //     new_fname(e.target.value);
    // }
    // const input_event2 = (e)=>{
    //     new_lname(e.target.value);
    // }
    const submit = (event)=>{
        event.preventDefault();
        alert("submitted");
    }


    return(
        <>
        <h1>Hello {fullName.fname} {fullName.lname}</h1>
        <p>{fullName.email}</p>
        <form onSubmit={submit}>
        <input type="text" onChange={input_event} placeholder="Enter your First Name" name="fname" value={fullName.fname} autoComplete='off'></input>
        <input type="text" onChange={input_event} placeholder="Enter your Last Name" name="lname" value={fullName.lname} autoComplete='off'></input>
        <input type="email" onChange={input_event} placeholder="Enter your email" name="email" value={fullName.email} autoComplete='off'></input>

        <button type="submit">Submit</button>
        </form>

        </>

    );
}
export default Forms;