import { rand } from './src/until'
import { NeuralNetwork } from './src/neural_network'
import { Matrix } from 'ml-matrix'

const neural:NeuralNetwork = new NeuralNetwork(3, 3)
neural.addLayer(3)
neural.addLayer(4)
neural.addLayer(2)

// console.log(neural.getInput())
// console.log(neural.getOutput())
// console.log(neural.getWeight(0))
// console.log(neural.getWeight(1))
// console.log(neural.getWeight(2))

// const A:Matrix = new Matrix([
//     [1, 2],
//     [3, 4]
// ])

// const B:Matrix = new Matrix([
//     [5, 6],
//     [7, 8]
// ])

// console.table(A.mmul(B))