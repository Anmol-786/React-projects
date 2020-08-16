import React from 'react';
import { useState } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ListTodo from './ListTodo';
import './TodoStyle.css';
import AddIcon from '@material-ui/icons/Add';


const Todo = ()=>{

    const [item,setItem] = useState("");
    const [list_items,setlist_items] = useState([]);
    const [line,setLine] = useState(false);
    const insert_items = (e)=>{

        setItem(e.target.value);
    }
    const addItem = ()=>{
        setlist_items((prev)=>{
            return [...prev,item];
        })
        setItem("");
    }
    const deleteItem = ()=>{
        setLine(true);
    }
    return(
        <>
        <div className="main_div">
        
            <div className="app_body">
            <h1 className="text-center head_div"> ToDo Items</h1>
            <br/>
                <div className="row">
                    <div className="col-8 offset-2">
                        <input type="text" autoComplete="off" onChange={insert_items} name="items" value={item} required></input>
                        <button className="addBtn" title="Add Item" onClick={addItem}><AddIcon/></button>
                        <br/>
                        <ul>
                            {list_items.map( (itemval)=>{
                                if(itemval!=="")
                                return (<ListTodo text={itemval}/>
                                )
                            } )}
                        </ul>
                </div>
                </div>
                </div>
            </div>
        </>
    )
}
export default Todo;