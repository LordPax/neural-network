import { NeuralNetwork, ReLu, Sig, Tanh, Heaviside } from '../main'

const neural:NeuralNetwork = new NeuralNetwork(4)
neural.addLayer(6)
neural.addLayer(4)
neural.addLayer(2)
neural.addLayer(3)
neural.addLayer(5)
 
const input:number[][] = [[2], [1], [4], [6]]
 
console.table(neural.calculate(input, Tanh, Heaviside))
 
neural.mutate()
 
console.table(neural.calculate(input, Tanh, Heaviside))

// neural.calculate(input, ReLu)
// console.table(neural.getOutputJSON())