import { useEffect, useState } from 'react'

import { useEmittery } from '../core/Emittery'

export function RenderTarget({ctx}) {
    const [items, setItems] = useState([{className: "RenderItemDefault", title: "XYZ"}])
    const emittery = useEmittery(ctx)

    useEffect(() => {
        const handleItemAdded = (item) => {
            const nItems = items

            nItems.push(item)

            setItems(nItems)

            console.log(nItems)
        }

        emittery.on('itemAdded', handleItemAdded)

        return () => {
            emittery.off('itemAdded', handleItemAdded)
        }
    }, [items,setItems,emittery])

    return (
        <div className="RenderTarget">
            {items.map((item, i) => (
                <span key={i} className={item.className}> {item.title} </span>
            ))}
        </div>
    )
}
