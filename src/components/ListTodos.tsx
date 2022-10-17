import { useDispatch } from "react-redux"
import {  change, done,remove } from "../store/actionsFunc";
import { ITodos } from "../types"
import './listtodos.css'
type Props={
    todos:ITodos
}
export default function List({todos}:Props){
    const dispatch = useDispatch();

    return (
        <li>
            <input
            type="checkbox"
            defaultChecked={todos.done}
            onClick={(e)=>{
                dispatch(done(todos.id,e.currentTarget.checked))
            }}
            />
            <input
            className="todo"
            type="text"
            defaultValue={todos.todo}
            onKeyUp={(e)=>{
            if(e.key==='Enter'){
                dispatch(change(todos.id,e.currentTarget.value))
                e.currentTarget.blur()
            }
            }}
            />
            <button onClick={()=>dispatch(remove(todos.id))} >X</button>
        </li>
    )
}