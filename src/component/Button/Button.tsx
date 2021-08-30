import React from 'react';
import styles from './Button.module.css'

type propsType = {
    title: string
    callback: () => void
    disable?: boolean
}


export const Button = (props: propsType) => {
    return (
        <button disabled={props.disable} className={styles.button} onClick={props.callback}>{props.title}</button>
    )
}