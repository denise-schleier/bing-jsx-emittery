import { useState } from 'react'

import { useEmittery } from '../core/Emittery'


export function SearchBar({ ctx }) {
    const [query, setQuery] = useState()
    const emittery = useEmittery(ctx)

    function handleInputChange(event) {
        setQuery(event.target.value)
    }

    function handleOK() {
        emittery.emit('query', query)
    }

    return (
        <div>
            <input type="text" onChange={handleInputChange} />
            <button onClick={handleOK}>OK</button>
        </div>
    )
}
