import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import {add} from '../store/actionsFunc';
import { ITodos } from "../types";
import Completed from "./CompletedTodo";
import List from "./ListTodos";
import './todo.css'
export default function Todo() {
    
    const dispatch = useDispatch();

    const todos = useSelector<ITodos[], ITodos[]>(state => state);
    
    const [count,setCount]=useState(1)

    return (
        <div>
            <div className="todos">
            <div className="todo-title">
                <h3>Задача</h3>
                <button onClick={()=>{
                    setCount(count+1);
                    dispatch(add(count,{
                        id:count,
                        todo:"",
                        done:false
                    }))
                }}
                className="todo-add"
                >Новая</button>
            </div>
            <div className="list-todos">
                <ul>
                    {todos.length>0?
                    todos.map((item,index)=>{
                        if(item.done===false){
                        return <List key={index} todos={item}/>}}
                    ):""}
                </ul>
            </div>
            </div>
            {todos.find(item=>item.done!==false)&&
            <Completed/>}
        </div>
    )
}