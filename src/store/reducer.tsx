import { ActionFunc, Actions, ITodos } from "../types";

export const reducer = (state: any[] | ITodos[] = [], action: ActionFunc) => {
    
    switch (action.type) {
        
        case Actions.ADD_TODO:
            return state.concat([action.value])

        case Actions.REMOVE_TODO:
            return state.filter(item=>item.id!==action.payload);

        case Actions.CHANGE_TODO:
            return state.map(item=>{
                if(item.id===action.payload){
                    return {...item,todo:action.text}
                } else {return item}
            })
        
        case Actions.DONE_TODO:
            return state.map(item=>{
                if(item.id===action.payload){
                    return {...item,done:action.value}
                } else {return item}
            })
        
        case Actions.RESET:
            return state.filter(item => item.done !== true);
        
        default:
            return state
    }
}