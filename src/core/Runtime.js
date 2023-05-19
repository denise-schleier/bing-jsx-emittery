import { useEffect } from 'react'

import { useEmittery } from '../core/Emittery'

export function Runtime({ ctx }) {
    const emittery = useEmittery(ctx)

    useEffect(() => {
        const x = setInterval(() => {
            emittery.emit('itemAdded', {className: 'viteLogo', title: 'vite'})
        }, 1000)

        return () => {
            clearInterval(x)
        }
    })
}