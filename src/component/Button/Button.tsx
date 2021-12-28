import React from "react";
import {Button} from "@material-ui/core";

type propsType = {
    title: string
    callback: () => void
    disable?: boolean
}


export const Buttons = React.memo((props: propsType) => {
    return (
        <Button variant="contained" color="primary" onClick={props.callback} disabled={props.disable}>
            {props.title}
        </Button>
    )
})
