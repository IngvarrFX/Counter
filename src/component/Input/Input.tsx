import React from 'react';

type InputPropsType = {
    value: number
    maxValue?: number
    startValue?: number
    callback: () => void
}


export const Input = (props:InputPropsType) => {

    return(
        <input value={props.value} onChange={props.callback} type="number"/>
    )
}