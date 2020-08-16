import React from 'react';
import { useState } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import RestoreIcon from '@material-ui/icons/Restore';

const ListTodo = (props)=>{
    const [item,setItem] = useState(false);
    const del = ()=>{
        setItem(true);
    }
    const recover = ()=>{
        setItem(false);
    }
    return (
        <>
        <div className="list_div">        
        <div className="row">
        <div className="col-1">
            <button className="delBtn" title="Delete item" onClick={del}><DeleteIcon/></button>
            </div>
            <div className="col-1 offset-1">
            <button className="resBtn" title="Restore Item" onClick={recover}><RestoreIcon/></button>
            </div>
            <div className="col-6 offset-2">
                <h4 className="head_div" style={{textDecoration:item?'line-through':'none',listStyle:'none'}}>{props.text}</h4>
            </div>
        </div>
        </div>
        </>
    )
}
export default ListTodo;