import React, {useCallback, useEffect} from "react";
import "./App.css";
import {Counter} from "./component/Counter/Counter";
import {Setter} from "./component/Setter/Setter";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {
    countValueAC,
    countValueTC,
    InitialStateType,
    setCountValueFromLocalStorageTC,
    setMaxValueFromLocalStorageTC,
    setMinValueFromLocalStorageTC
} from "./bll/counter-reducer";


function App() {

    const value = useSelector<AppStateType, InitialStateType>(state => state.counter)
    let dispatch = useDispatch()

    useEffect(() => {
        dispatch(setCountValueFromLocalStorageTC())
    }, [])

    useEffect(() => {
        dispatch(setMinValueFromLocalStorageTC())
    }, [])

    useEffect(() => {
        dispatch(setMaxValueFromLocalStorageTC())
    }, [])

    const incrementCount = useCallback(() => {
        if (value.count < value.maxValue) {
            dispatch(countValueTC())
        }
    }, [dispatch, countValueTC])

    const resetCounter = useCallback(() => {
        dispatch(countValueAC(value.minValue))
    }, [dispatch, countValueAC])


    return (
        <div className="App">
            {value.render ?
                <Counter
                    startValue={value.minValue}
                    maxCount={value.maxValue}
                    count={value.count}
                    incrementCount={incrementCount}
                    resetCounter={resetCounter}
                />
                :
                <Setter
                    maxValue={value.maxValue}
                    startValue={value.minValue}
                />
            }
        </div>
    );
}

export default App;
