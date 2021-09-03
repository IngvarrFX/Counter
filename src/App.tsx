import React, {useState} from 'react';
import './App.css';
import {Counter} from './component/Counter/Counter';
import {Setter} from './component/Setter/Setter';


function App() {

    let [max, setMax] = useState<number>(5)
    let [min, setMin] = useState<number>(0)

    let maxValue = max
    let startValue = min

    let [counter, setCounter] = useState<number>(startValue)



    const incrementCount = () => {
        if (counter < maxValue) {
            setCounter(++counter)
        }
    }

    const resetCounter = () => {
        setCounter(startValue)

    }

    const setInput = () => {

    }

    let [render, setRender]=useState(true)


    return (
        <div className="App">
            {render?
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
