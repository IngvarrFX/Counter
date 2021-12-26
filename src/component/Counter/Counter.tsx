import React from 'react';
import {Buttons} from '../Button/Button';
import {Display} from '../Display/Display';
import styles from './Counter.module.css'
import {useDispatch} from "react-redux";
import {renderAC} from "../../bll/counter-reducer";


type CounterPropsType = {
    startValue: number
    count: number
    incrementCount: () => void
    resetCounter: () => void
    maxCount: number
    //setRender: (value: boolean) => void
}


export const Counter =React.memo ((props: CounterPropsType) => {

    let dispatch = useDispatch()

    const setRenderHandler = () => {
        //props.setRender(false)
        dispatch(renderAC(false))
    }

    return (
        <div className={styles.wrapper}>
            <Display
                maxCount={props.maxCount}
                count={props.count}
            />
            <div className={styles.buttons}>
                <Buttons title={'inc'} callback={props.incrementCount} disable={props.maxCount === props.count}/>
                <Buttons title={'reset'} callback={props.resetCounter} disable={props.count === props.startValue}/>
                <Buttons title={'Set'} callback={setRenderHandler}/>

            </div>
        </div>
    )
})

//disabled={props.maxCount < 0 || props.startValue < 0 || props.maxCount === props.startValue} className={styles.setterButton} onClick={()=>props.setRender(false)}