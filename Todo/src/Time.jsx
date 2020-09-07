import React from 'react';
import { useState } from 'react';


const Time = ()=>{
    let time = new Date().toLocaleTimeString();

    const [curr_time,new_time] = useState(time);
    const update_time=()=>{
        let u_time = new Date().toLocaleTimeString();
        new_time(u_time);
    }

    setInterval(update_time,1);
    return(
        <>
        <h1>{curr_time}</h1>
        </>
    );
}

export default Time;