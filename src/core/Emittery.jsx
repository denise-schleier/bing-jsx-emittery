import Emittery from 'emittery'
import { createContext, useContext } from 'react'

export const EmitteryContext = createContext()
export const EmitteryProvider = EmitteryContext.Provider

export class EmitterySite extends Emittery {
    constructor(ctx) {
        super()

        this.ctx = ctx
        this.serial = 0
    }

    emit(event, ...data) {
        this.serial += 1

        super.emit(event, [this.ctx, this.serial, ...data])
    }
}


const emitters = new Map

export function useEmittery(ctx) {
    let cached = emitters.get(ctx)
    let ask = useContext(EmitteryContext)

    if (cached === undefined) {
        cached = ask(ctx)
        emitters.set(ctx, cached)
    }

    return cached
}
