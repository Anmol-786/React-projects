import React from 'react';
import { useState } from 'react';


const App = ()=>{
    //const state = useState();
    const [count,new_state] = useState(0);
    const Func = ()=>
    {
        new_state(count+1);
    }
    const Fun2 = ()=>{
        if(count>0)
        new_state(count-1);
        else
        alert("0 reached");
    }
    return(
        <>
        <h1>{count}</h1>
        <button onClick={Func}>+</button>
        <button onClick={Fun2}>-</button>
        </>
    );
}
export default App;