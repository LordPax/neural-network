import { Matrix } from 'ml-matrix'
import { roundNumber } from 'lib-perso'

export type Func = (x:number) => number

export const ReLu = (x:number):number => x < 0 ? 0 : x
export const Heaviside = (x:number):number => x < 0 ? 0 : 1
export const Sig = (x:number):number => roundNumber(1 / (1 + Math.exp(-x)), 2)
export const Tanh = (x:number):number => roundNumber(2 / (1 + Math.exp(-2 * x)) -1, 2)

// dérivées
export const ReLuP = (x:number):number => x < 0 ? 0 : 1
export const SigP = (x:number):number => roundNumber(Sig(x) * (1 - Sig(x)), 2)
export const TanhP = (x:number):number => roundNumber(1 - Tanh(x) * Tanh(x), 2)

export const activ = (mat:Matrix, func:Func):Matrix => {
    const res:number[] = mat.getColumn(0).map(elem => {
        const nb:number = roundNumber(elem, 2)
        return func(nb)
    })
    return (new Matrix(mat.rows, 1)).setColumn(0, res)
}
