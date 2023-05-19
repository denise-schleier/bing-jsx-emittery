import { useEffect, useState } from 'react'

import { useEmittery } from '../core/Emittery'

export function ImageListView({ ctx }) {
    const [images, setImages] = useState([])
    const emittery = useEmittery(ctx)

    useEffect(() => {
        const handleImagesLoaded = (loadedImages) => {
            setImages(loadedImages)
        }

        const clearList = () => {
            setImages([])
        }

        emittery.on('imagesLoaded', handleImagesLoaded)
        emittery.on('query', clearList)

        return () => {
            emittery.off('imagesLoaded', handleImagesLoaded)
            emittery.on('query', clearList)
        }
    }, [setImages,emittery])

    return (
        <div className="ImageListView">
            {images.map((image, i) => (
                <a key={i} href={image.contentUrl}>
                    <img src={image.thumbnailUrl} alt={image.name} width="200" />
                </a>
            ))}
        </div>
    )
}
