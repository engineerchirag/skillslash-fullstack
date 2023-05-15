import { useState } from "react"

const List = () => {
    const [state, setState] = useState(['Item 1','Item 2', 'Item 3', 'Item 4', 'Item 5']);
    const handleAdd = () => {
        setState(oldState => ([
            `Item ${oldState.length + 1 }`,
            ...oldState,
        ]));
    }

    const handleDelete = () => {

    }
    
    return (
        <ul>
            {
                state.map(data => (
                    <li key={data}>{data} <span onClick={handleDelete}>X</span></li>
                ))
            }
            <button onClick={handleAdd}>Add Item</button>
        </ul>
    )
}

export default List;