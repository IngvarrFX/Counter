import React from 'react';
import {Button} from '../Button/Button';
import {Display} from '../Display/Display';
import styles from './Counter.module.css'


type CounterPropsType = {
    startValue: number
    count: number
    incrementCount: () => void
    resetCounter: () => void
    maxCount: number
    setRender: (value: boolean) => void
}


export const Counter = (props: CounterPropsType) => {

    return (
        <div className={styles.wrapper}>
            <Display
                maxCount={props.maxCount}
                count={props.count}
            />
            <div className={styles.buttons}>
                <Button title={'inc'} callback={props.incrementCount} disable={props.count === props.maxCount}/>
                <Button title={'reset'} callback={props.resetCounter} disable={props.count === props.startValue}/>
                    <button disabled={props.maxCount < 0 || props.startValue < 0 || props.maxCount === props.startValue} className={styles.setterButton} onClick={()=>props.setRender(false)}>Set</button>

            </div>
        </div>
    )
}