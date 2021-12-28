import React, {ChangeEvent} from "react";
import {TextField} from "@material-ui/core";

type InputPropsType = {
    title: string
    value: number
    maxValue?: number
    startValue?: number
    callback: (e: ChangeEvent<HTMLInputElement>) => void
}


export const Input = React.memo((props: InputPropsType) => {
    return (
        <TextField id="standard-basic" type="number" label={props.title} value={props.value} onChange={props.callback}/>
    )
})
