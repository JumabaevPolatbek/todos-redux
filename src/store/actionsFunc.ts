import { Actions } from "../types"

export const add=(id:number,value:any)=>{
    return {
        type:Actions.ADD_TODO,
        payload:id,
        value:value
    }
}
export const remove=(id:number)=>{
    return {
        type:Actions.REMOVE_TODO,
        payload:id
    }
}
export const change=(id:number,value:string)=>{
    return {
        type:Actions.CHANGE_TODO,
        payload:id,
        text:value
    }
}
export const done =(id:number,value:boolean)=>{
    return {
        type:Actions.DONE_TODO,
        payload:id,
        value:value
    }
}
export const reset = () => {
    return {
        type:Actions.RESET
    }
}