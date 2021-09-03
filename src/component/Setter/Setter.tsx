import React, {ChangeEvent, useState} from 'react';
import {Input} from '../Input/Input';
import {Buttons} from '../Button/Button';
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


    let dis = props.maxValue < 0
        || props.maxValue === props.startValue
        || props.startValue < 0
        || props.maxValue < props.startValue

    return (
        <div className={styles.wrapper}>
            <div className={styles.twiceWrapper}>
                <div className={styles.inputs}>
                    <div>
                        <Input value={props.maxValue} callback={onChangeMaxHandler} title={'Max value'}/>
                    </div>
                    <div>
                        <Input value={props.startValue} callback={onChangeMinHandler}  title={'Min value'}/>
                    </div>
                </div>
                {dis? <span className={styles.errorSpan} >Incorrect value!</span>: <span className={styles.span}>Set value</span>}
                <div className={styles.buttons}>
                    <Buttons
                        disable={dis}
                        callback={setNumber}
                        title={'Set'}
                    />
                </div>
            </div>
        </div>
    )
}