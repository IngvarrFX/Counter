import React, {useCallback} from "react";
import {Buttons} from "../Button/Button";
import {Display} from "../Display/Display";
import styles from "./Counter.module.css"
import {useDispatch} from "react-redux";
import {renderAC} from "../../bll/counter-reducer";


type CounterPropsType = {
    startValue: number
    count: number
    incrementCount: () => void
    resetCounter: () => void
    maxCount: number
}


export const Counter = React.memo((props: CounterPropsType) => {

    let dispatch = useDispatch()

    const setRenderHandle = useCallback(() => {
        dispatch(renderAC(false))
    }, [dispatch, renderAC])

    return (
        <div className={styles.wrapper}>
            <Display
                maxCount={props.maxCount}
                count={props.count}
            />
            <div className={styles.buttons}>
                <Buttons title={"inc"} callback={props.incrementCount} disable={props.maxCount === props.count}/>
                <Buttons title={"reset"} callback={props.resetCounter} disable={props.count === props.startValue}/>
                <Buttons title={"Set"} callback={setRenderHandle}/>

            </div>
        </div>
    )
})

