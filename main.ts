export { rand2, rand, ReLu, Sig, Tanh, Heaviside, activ, Func, roundNumber } from './src/until'
export { NeuralNetwork } from './src/neural_network'
export { Matrix } from 'ml-matrix'



// const neural:NeuralNetwork = new NeuralNetwork(4)
// neural.addLayer(6)
// neural.addLayer(4)
// neural.addLayer(2)
// neural.addLayer(3)
// neural.addLayer(5)

// const otherNeural:NeuralNetwork = neural.cloneMutate()

// const input:number[][] = [[2], [1], [4], [6]]

// console.table(neural.calculate(input, Tanh, Heaviside))
// console.table(otherNeural.calculate(input, Tanh, Heaviside))

// neural.mutate()

// console.table(neural.calculate(input, Tanh, Heaviside))