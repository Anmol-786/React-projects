import React from 'react';
import './style.css'

var add = (a,b)=>{
    let sum = a+b;
    return sum;
}

export default add;

var sub = (a,b)=>{
    let diff = a-b;
    return diff;
}

var mul = (a,b)=>{
    let mult = a*b;
    return mult;
}

var div = (a,b)=>{
    let division = a/b;
    return division;
}

export {sub,mul,div};