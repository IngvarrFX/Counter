import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './component/Counter/Counter';
import {Setter} from './component/Setter/Setter';


function App() {

    let [max, setMax] = useState<number>(5)
    let [min, setMin] = useState<number>(0)

    let maxValue = max
    let startValue = min

    let [counter, setCounter] = useState<number>(startValue)


    useEffect(() => {
        let valueMaxString = localStorage.getItem('counterMaxValue')
        if (valueMaxString) {
            let newValue = JSON.parse(valueMaxString)
            if (newValue > 0) {
                setMax(newValue)
            }
        }
    }, [])

    useEffect(() => {
        let valueMinString = localStorage.getItem('counterMinValue')
        if (valueMinString) {
            let newValue = JSON.parse(valueMinString)
            if (newValue >= 0) {
                setMin(newValue)
                setCounter(newValue)
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterMaxValue', JSON.stringify(max))
    }, [max])
    useEffect(() => {
        localStorage.setItem('counterMinValue', JSON.stringify(min))
    }, [min])


    const incrementCount = () => {
        if (counter < maxValue) {
            setCounter(++counter)
        }
    }

    const resetCounter = () => {
        setCounter(startValue)
    }

    let [render, setRender] = useState(true)


    return (
        <div className="App">
            {render ?
                <Counter
                    startValue={startValue}
                    maxCount={maxValue}
                    count={counter}
                    incrementCount={incrementCount}
                    resetCounter={resetCounter}
                    setRender={setRender}
                />
                :
                <Setter
                    setCounter={setCounter}
                    maxValue={max}
                    setMax={setMax}
                    startValue={min}
                    setMin={setMin}
                    setRender={setRender}
                />
            }
        </div>
    );
}

export default App;
