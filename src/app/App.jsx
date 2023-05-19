import './App.css'

import { Agent } from './Agent'
import { EmitteryProvider, EmitterySite } from '../core/Emittery'
import { Runtime } from '../core/Runtime'
import { Root } from '../layout/Root'

const ctxMain = Symbol()

function App() {
    const askEmittery = (ctx) => new EmitterySite(ctx)

    return (
        <EmitteryProvider value={askEmittery}>
            <Runtime ctx={ctxMain}/>
            <Agent ctx={ctxMain}/>
            <Root ctx={ctxMain}/>
        </EmitteryProvider>
    )
}

export default App
