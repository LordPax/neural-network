import { Matrix } from 'ml-matrix'

export const superfor = (compt:number, f:(i:number, r:any) => any, acc:number = 0, r:any = null):any => {
    const re:any = acc < compt ? f(acc, r) : r
    return acc < compt ? superfor(compt, f, acc + 1, re) : re
}

export const randInt = (min:number, max:number, round:number = 2):number => 
    roundNumber(Math.random() * (max - min + 1) + min, round)

export const rand = ():number =>
    roundNumber(Math.random(), 2)

export const match = (test:any, acc:any = null):any => {
    return {
        case : (val:any, act:()=>any):any => match(test, val === test ? act() : acc),
        default : (act:()=>any):any => acc === null ? act() : acc
    }
}

export const roundNumber = (num:number, dec:number):number => 
    Math.round(num * Math.pow(10, dec)) / Math.pow(10, dec)

export const ReLu = (x:number):number => x < 0 ? 0 : x
export const sig = (x:number):number => 1 / (1 + Math.exp(-x))
export const Tanh = (x:number):number => 2 / (1 + Math.exp(-2 * x)) -1

// export const ectivation = (mat:Matrix):Matrix => 

// export interface Matrix {
//     size: () => number[]
//     add: (operand:Matrix) => number[][]
//     sub: (operand:Matrix) => number[][]
//     mul: (operand:Matrix) => number[][]
//     div: (operand:Matrix) => number[][]
//     prod: (operand:Matrix) => number[][]
//     trans: () => number[][]
//     set: () => number[][]
//     det: () => number[][]
//     inv: () => number[][]
//     merge: object
//     map: (func:(value:number, row:number, col:number, mat:Matrix) => number) => number[][]
//     equals: (operand:Matrix) => boolean
// }

// export type Mat = (mat:number[][]) => Matrix

