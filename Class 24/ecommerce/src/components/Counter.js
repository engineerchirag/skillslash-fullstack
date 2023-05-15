import { useState } from "react"

const Counter = () => {
    const  [count, setCount] = useState(0);
    const handleIncrease = () => {
        setCount((oldState) => {
            return oldState + 1;
        });   
    }

    const handleDecrease = () => {
        setCount((oldState) => {
            return oldState - 1;
        });
    }

    return (
        <>
            <button onClick={handleDecrease}>-</button>
                {count}
            <button onClick={handleIncrease}>+</button>
        </>
    )
}

export default Counter;