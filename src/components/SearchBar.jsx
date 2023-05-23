import { useState } from 'react'

import { useEmittery } from '../core/Emittery'


export function SearchBar({ ctx }) {
    const [query, setQuery] = useState()
    const emittery = useEmittery(ctx)

    function handleInputChange(event) {
        setQuery(event.target.value)
    }

    function handleOK(e) {
        e.preventDefault()
        emittery.emit('query', query)
    }

    return (
        <div>
            <form>
            <input type="text" onChange={handleInputChange} />
            <button type="submit" onClick={handleOK}>OK</button>
            </form>
        </div>
    )
}
