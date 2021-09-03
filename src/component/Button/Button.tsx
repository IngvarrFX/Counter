import React from 'react';
import styles from './Button.module.css'
import {Button} from '@material-ui/core';

type propsType = {
    title: string
    callback: () => void
    disable?: boolean
}


export const Buttons = (props: propsType) => {
    return (
        /*<button disabled={props.disable} className={styles.button} onClick={props.callback}>{props.title}</button>*/
    <Button variant="contained" color="primary" onClick={props.callback} disabled={props.disable}>
        {props.title}
    </Button>
    )
}