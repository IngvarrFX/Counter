import React, {ChangeEvent, useCallback} from "react";
import {Input} from "../Input/Input";
import {Buttons} from "../Button/Button";
import styles from "./Setter.module.css"
import {useDispatch} from "react-redux";
import {countValueAC, renderAC, setMaxValueTC, setMinValueAC, setMinValueTC} from "../../bll/counter-reducer";


type SetterPropsType = {
    maxValue: number
    startValue: number
}

export const Setter = React.memo((props: SetterPropsType) => {

    let dispatch = useDispatch()


    const onChangeMaxHandle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueTC(Number(e.currentTarget.value)))
    }, [dispatch, setMaxValueTC])

    const onChangeMinHandle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMinValueTC(Number(e.currentTarget.value)))
    }, [dispatch, setMinValueAC])

    const setNumber = useCallback(() => {
        dispatch(setMaxValueTC(props.maxValue))
        dispatch(countValueAC(props.startValue))
        dispatch(renderAC(true))
    }, [dispatch, setMaxValueTC, countValueAC, renderAC])


    let dis = props.maxValue < 0
        || props.maxValue === props.startValue
        || props.startValue < 0
        || props.maxValue < props.startValue

    return (
        <div className={styles.wrapper}>
            <div className={styles.twiceWrapper}>
                <div className={styles.inputs}>
                    <div>
                        <Input value={props.maxValue} callback={onChangeMaxHandle} title={"Max value"}/>
                    </div>
                    <div>
                        <Input value={props.startValue} callback={onChangeMinHandle} title={"Min value"}/>
                    </div>
                </div>
                {dis ? <span className={styles.errorSpan}>Incorrect value!</span> :
                    <span className={styles.span}>Set value</span>}
                <div className={styles.buttons}>
                    <Buttons
                        disable={dis}
                        callback={setNumber}
                        title={"Set"}
                    />
                </div>
            </div>
        </div>
    )
})
