import { rand2, ReLu, Sig, Tanh, Heaviside } from './src/until'
import { NeuralNetwork } from './src/neural_network'
import { Matrix } from 'ml-matrix'

const neural:NeuralNetwork = new NeuralNetwork(4)
neural.addLayer(6)
neural.addLayer(4)
neural.addLayer(2)
neural.addLayer(3)
neural.addLayer(5)

// const otherNeural:NeuralNetwork = neural.clone()

const input:number[][] = [[2], [1], [4], [6]]
//const inputMat:Matrix = new Matrix(input)

console.table(neural.getWeight(0).toJSON())
console.table(neural.getBias(0).toJSON())

console.table(neural.calculate(input, Tanh, Heaviside))

neural.mutate()

console.log('================================')

console.table(neural.getWeight(0).toJSON())
console.table(neural.getBias(0).toJSON())

console.table(neural.calculate(input, Tanh, Heaviside))