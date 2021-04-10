# Billy's Brain
## Description
Little project to learn how works neural networks

## Installation from npm
```bash
npm i -s billy-brain
```

## Installation from github
```bash
git clone https://github.com/LordPax/neural-network.git && cd neural-network
npm install
npm run build
npm start
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

## Activation function
| Name | Graph | Equation |
|:----:|:-----:|:--------:|
|ReLu|![ReLu](https://raw.githubusercontent.com/LordPax/neural-network/master/images/ReLu.png)|![ReLu](https://raw.githubusercontent.com/LordPax/neural-network/master/images/ReLu_graph.svg)|
|Heaviside|![Heaviside](https://raw.githubusercontent.com/LordPax/neural-network/master/images/heaviside.png)|![Heaviside](https://raw.githubusercontent.com/LordPax/neural-network/master/images/heaviside_graph.svg)|
|Sigmoid|![Sigmoid](https://raw.githubusercontent.com/LordPax/neural-network/master/images/sigmoid.png)|![Sigmoid](https://raw.githubusercontent.com/LordPax/neural-network/master/images/sigmoid_graph.svg)|
|Tangente hyperbolique|![tanh](https://raw.githubusercontent.com/LordPax/neural-network/master/images/Tanh.png)|![tanh](https://raw.githubusercontent.com/LordPax/neural-network/master/images/tanh_graph.svg)|