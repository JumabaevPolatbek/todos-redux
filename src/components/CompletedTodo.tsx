import { useDispatch, useSelector } from "react-redux"
import List from "./ListTodos";
import { ITodos } from "../types";
import { reset } from "../store/actionsFunc";

export default function Completed() {
    
    const todos = useSelector<ITodos[], ITodos[]>(state => state);

    const dispatch = useDispatch();

    return (
        
        <div className="completed">
            <div className="completed__header">
                <h3>Выпольнено</h3>
                <button onClick={()=>dispatch(reset())}>Очистить</button>
            </div>
            <ul>
                {todos.map((item,index)=>{
                    if(item.done!==false){
                        return <List key={index} todos={item}/>
                    }
                })}
            </ul>
        </div>
    )
}