import { useState } from "react";
import Counter from "./Counter"

const CounterWrapper = () => {
    const [show1, toggleShow1] = useState(true);
    const [show2, toggleShow2] = useState(true);
    const [show3, toggleShow3] = useState(true);
    return (
        <>
            <div className="counter-wrapper">

                {/* <div className="red" style={{ display: show1 ? 'block' : 'none'}}>
                    <Counter />
                </div>
                {
                    show2 && (
                        <div className="green">
                            { show2 && <Counter /> }
                        </div>
                    )
                }
                { show3 && (
                    <div className="blue">
                        { show3 && <Counter /> }
                    </div>
                )} */}

                    { show1 ? (<div className="red">
                         <Counter key="red"/>
                    </div>) : (
                        <div className="green">
                             <Counter key="green"/> 
                        </div>
                    )}
            </div>
            <div>
                Counter 1: <input type="checkbox" onClick={() => toggleShow1(!show1)} />
                {/* Counter 2: <input type="checkbox" onClick={() => toggleShow2(!show2)} />
                Counter 3: <input type="checkbox" onClick={() => toggleShow3(!show3)} /> */}
            </div>
        </>
    )
}

export default CounterWrapper;