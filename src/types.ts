export interface ITodos{
    id:number
    todo:string
    done:false
}

export enum Actions{
    ADD_TODO="ADD_TODO",
    REMOVE_TODO="REMOVE_TODO",
    CHANGE_TODO="CHANGE_TODO",
    DONE_TODO = "DONE_TODO",
    RESET="RESET"
}

type ADD={
    type:Actions.ADD_TODO,
    payload:number,
    value:{
        id:number,
        todo:string,
        done:false
    }
}

type REMOVE={
    type:Actions.REMOVE_TODO,
    payload:number
}

type CHANGE={
    type:Actions.CHANGE_TODO,
    text:string,
    payload:number
}

type DONE={
    type:Actions.DONE_TODO,
    payload:number,
    value:boolean
}

type RESET = {
    type: Actions.RESET,
}

export type ActionFunc=ADD|REMOVE|CHANGE|DONE|RESET