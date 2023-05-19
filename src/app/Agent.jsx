import axios from 'axios'
import { useEffect } from 'react'

import { useEmittery } from '../core/Emittery'

export function Agent({ ctx }) {
    const emittery = useEmittery(ctx)

    useEffect(() => {
        async function fetchImages(query) {
            try {
                const options = {
                    url: 'https://bing-image-search1.p.rapidapi.com/images/search',
                    method: 'GET',
                    params: {
                        q: query,
                        count: 50,
                        offset: 0,
                        safeSearch: 'off'
                    },
                    headers: {
                        'x-rapidapi-key': '185666417cmshcb6cb46fcb0fe21p1f568djsnf53e92f4ca97', // Replace with your RapidAPI key
                        'x-rapidapi-host': 'bing-image-search1.p.rapidapi.com',
                    },
                }
                const response = await axios.request(options)

                if (response.status = 200) {
                    const data = await response.data
                    const retrievedImages = data.value
                    emittery.emit('imagesLoaded', retrievedImages) // Emitting the 'imagesLoaded' event with the retrieved images
                } else {
                    console.error('Error retrieving images:', response)
                }
            } catch (error) {
                console.error('Error retrieving images:', error)
            }
        }

        emittery.on('query', (q) => {
            fetchImages(q)
        })

    }, [emittery])

    return null // The Agent component doesn't need to render anything
}
