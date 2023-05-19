/* eslint-disable react/prop-types */
import viteLogo from '/vite.svg'

import { ImageListView } from '../components/ImageListView'
import { SearchBar } from '../components/SearchBar'

import { RenderTarget } from '../components/RenderTarget'


export function Root({ ctx }) {
    return (
        <div>
            <div>
                <img src={viteLogo} />
            </div>

            <RenderTarget ctx={ctx} />

            <SearchBar ctx={ctx} />

            <ImageListView ctx={ctx} />
        </div>
    )
}
