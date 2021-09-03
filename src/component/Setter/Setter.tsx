import React, {ChangeEvent, useState} from 'react';
import {Input} from '../Input/Input';
import {Button} from '../Button/Button';
import styles from './Setter.module.css'


type SetterPropsType = {
    maxValue: number
    setMax: (max: number) => void
    startValue: number
    setMin: (min: number) => void
    setCounter: (value: number) => void
    setRender: (value: boolean) => void
}

export const Setter = (props: SetterPropsType) => {
    let [dis, setDis] = useState(false)

    const onChangeMaxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMax(Number(e.currentTarget.value))
    }

    const onChangeMinHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setMin(Number(e.currentTarget.value))

    }

    const setNumber = () => {
        props.setMax(props.maxValue)
        props.setCounter(props.startValue)
        props.setRender(true)
    }

    const disableToggle = () => {
        if (props.maxValue < 0 || props.maxValue === props.startValue || props.startValue < 0) {
            setDis(true)
        } else {
            setDis(false)
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.twiceWrapper}>
                <div>
                    <div>max value: <input className={props.maxValue < props.startValue ? styles.redMax : ''}
                                           value={props.maxValue} type="number"
                                           onChange={(e) => onChangeMaxHandler(e)}/></div>
                    <div>start value: <input className={props.startValue >= props.maxValue ? styles.redMin : ''}
                                             value={props.startValue} type="number"
                                             onChange={(e) => onChangeMinHandler(e)}/></div>


                </div>
                <div className={styles.buttons}>
                    <button disabled={dis} className={styles.button} onClick={setNumber}>Set</button>
                </div>
            </div>
        </div>
    )
}