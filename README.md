# Neural Network
## Description
Little project to understand how to works neural networks

## Installation from npm
```bash
npm i -s billy-brain
```
## Example of script
```ts
import { NeuralNetwork, ReLu, Sig, Tanh, Heaviside } from 'billy-brain'

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
```

## Installation from github
```bash
git clone https://github.com/LordPax/neural-network.git && cd neural-network
npm install
npm run build
npm start
```