import { NeuralNetwork, ReLu, Sig, Tanh, Heaviside } from '../main'

const neural:NeuralNetwork = new NeuralNetwork(2)
neural.addLayer(2)
neural.addLayer(1)

const X:number[][][] = [ // input value
    [[2], [1]], 
    [[5], [3]], 
    [[1], [3]], 
    [[3], [3]], 
    [[6], [5]], 
    [[6], [2]]
]
const Y:number[][][] = [[[1]], [[0]], [[1]], [[1]], [[0]], [[0]]] // expected output result

const res:number[][] = neural.calculate(X[1], Tanh, Sig)

console.log('weight :')
console.table(neural.saveWeight()[0])
console.table(neural.saveWeight()[1])

console.log('bias :')
console.table(neural.saveBias()[0])
console.table(neural.saveBias()[1])

console.log('result :')
console.table(res)

neural.backProp(Y[1])

// TODO: finir test quand backProp sera terminé