import {Dispatch} from "react";
import {AppStateType} from "./store";


const INC_MAX_VALUE = "INC_MAX_VALUE"
const INC_MIN_VALUE = "INC_MIN_VALUE"
const SET_MAX_VALUE = "SET_MAX_VALUE"
const SET_MIN_VALUE = "SET_MIN_VALUE"
const COUNT_VALUE = "COUNT_VALUE"
const RENDER = "RENDER"

export type InitialStateType = {
    maxValue: number
    minValue: number
    count: number
    render: boolean
}
const initialState = {
    maxValue: 5,
    minValue: 0,
    count: 0,
    render: true
}

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "SET_MAX_VALUE":
            return {...state, maxValue: action.maxValue}
        case "SET_MIN_VALUE":
            return {...state, minValue: action.minValue, count: action.minValue}
        case "COUNT_VALUE":
            return {...state, count: action.count}
        case "RENDER":
            return {...state, render: action.render}

    }
    return state

}


//Action Creators

export type IncMaxValueType = {
    type: typeof INC_MAX_VALUE
}
export const incMaxValueAC = (): IncMaxValueType => ({type: INC_MAX_VALUE} as const)


export type SetMaxValueType = {
    type: typeof SET_MAX_VALUE
    maxValue: number
}
export const setMaxValueAC = (maxValue: number): SetMaxValueType => ({type: SET_MAX_VALUE, maxValue} as const)


export type IncMinValueType = {
    type: typeof INC_MIN_VALUE
}
export const incMinValueAC = (): IncMinValueType => ({type: INC_MIN_VALUE} as const)


export type SetMinValueType = {
    type: typeof SET_MIN_VALUE
    minValue: number
}
export const setMinValueAC = (minValue: number): SetMinValueType => ({type: SET_MIN_VALUE, minValue} as const)


export type CountType = {
    type: typeof COUNT_VALUE
    count: number
}
export const countValueAC = (count: number): CountType => ({type: COUNT_VALUE, count} as const)


export type RenderType = {
    type: typeof RENDER
    render: boolean
}
export const renderAC = (render: boolean): RenderType => ({type: RENDER, render} as const)

//THUNK

export const countValueTC = () => (dispatch: Dispatch<ActionType>, getState: () => AppStateType) => {
    let currentValue = getState().counter.count
    localStorage.setItem("CounterValue", JSON.stringify(currentValue + 1))
    dispatch(countValueAC(currentValue + 1))
}
export const setCountValueFromLocalStorageTC = () => (dispatch: Dispatch<ActionType>) => {
    let valueCountString = localStorage.getItem("CounterValue")
    if (valueCountString) {
        let newValue = JSON.parse(valueCountString)
        if (newValue > 0) {
            dispatch(countValueAC(newValue))
        }
    }
}










export const setMinValueTC = (minValue: number) => (dispatch: Dispatch<ActionType>) => {
    localStorage.setItem("minValue", JSON.stringify(minValue))
    dispatch(setMinValueAC(minValue))
}
export const setMinValueFromLocalStorageTC = () => (dispatch: Dispatch<ActionType>)=> {
    let minValueString = localStorage.getItem("minValue")
    if(minValueString){
        let newValue  = JSON.parse(minValueString)
        if(newValue> 0){
            dispatch(setMinValueAC(newValue))
        }
    }
}









export const setMaxValueTC = (maxValue: number) => (dispatch: Dispatch<ActionType>) => {
    localStorage.setItem("maxValue", JSON.stringify(maxValue))
    dispatch(setMaxValueAC(maxValue))
}
export const setMaxValueFromLocalStorageTC = () => (dispatch: Dispatch<ActionType>)=> {
    let maxValueString = localStorage.getItem('maxValue')
    if(maxValueString){
        let newValue  = JSON.parse(maxValueString)
        if(newValue> 0){
            dispatch(setMaxValueAC(newValue))
        }
    }
}

export type ActionType = IncMaxValueType
    | IncMinValueType
    | SetMaxValueType
    | SetMinValueType
    | CountType
    | RenderType






