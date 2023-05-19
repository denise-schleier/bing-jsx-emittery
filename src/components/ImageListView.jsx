import { useEffect, useState } from 'react'

import { useEmittery } from '../core/Emittery'

export function ImageListView({ ctx }) {
    const [images, setImages] = useState([])
    const emittery = useEmittery(ctx)

    useEffect(() => {
        const handleImagesLoaded = (loadedImages) => {
            setImages(loadedImages.data)
        }

        const clearList = () => {
            setImages([])
        }

        const off1 = emittery.on('imagesLoaded', handleImagesLoaded)
        const off2 = emittery.on('query', clearList)

        return () => {
            off1()
            off2()
        }
    }, [setImages,emittery])

    return (
        <div className="ImageListView">
            {images.map((image, i) => (
                <a key={i} href={image.contentUrl}>
                    <img src={image.thumbnailUrl} alt={image.name} width="500" />
                </a>
            ))}
        </div>
    )
}
