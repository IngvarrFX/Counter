import React, {ChangeEvent} from 'react';
import {TextField} from '@material-ui/core';

type InputPropsType = {
    title: string
    value: number
    maxValue?: number
    startValue?: number
    callback: (e: ChangeEvent<HTMLInputElement>) => void
}


export const Input =React.memo( (props:InputPropsType) => {

    return(
        /*<input value={props.value} onChange={props.callback} type="number"/>*/
   /* <TextField
        value={props.value}
        id="standard-number"
        label={props.title}
        type="number"
        InputLabelProps={{
            shrink: true,
        }}
        onChange={props.callback}
    />*/
    <TextField id="standard-basic" type="number" label={props.title}  value={props.value} onChange={props.callback}/>
    )
})