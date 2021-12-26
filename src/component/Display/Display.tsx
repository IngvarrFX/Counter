import React from 'react';
import styles from './Display.module.css'

type DisplayPropsType = {
    count: number
    maxCount: number
}


export const Display =React.memo ((props: DisplayPropsType) => {
    return (
        <div className={props.count === props.maxCount ? styles.displayRed : styles.display}>
            {props.count}
        </div>
    )
})