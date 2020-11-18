import { rand2, rand, ReLu, Sig, Tanh, activ, Func, roundNumber } from './until'
import { Matrix } from 'ml-matrix'

export class NeuralNetwork {
    private nbInput:number
    private nbLayer:number
    private reward:number
    private mutationChance:number

    private output:Matrix
    private weight:Matrix[]
    private bias:Matrix[]

    constructor(nbInput:number) {
        this.nbInput = nbInput
        this.nbLayer = 0
        this.mutationChance = 0.1
        this.reward = 0

        this.weight = []
        this.bias = []

        this.setOutput(new Matrix(1, 1))
    }

    /**
    * ajoute une layer avec nbNode neurone
    *
    * @param nbNode nombre de neurone pour cette layer
    */
    public addLayer(nbNode:number):void {
        const cols:number = this.nbLayer === 0 ? 
            this.nbInput : this.getWeight(this.nbLayer - 1).rows

        this.addWeight(Matrix.rand(nbNode, cols, { random:rand2 }))
        this.addBias(Matrix.rand(nbNode, 1, { random:rand2 }))

        this.nbLayer += 1
    }

    /**
    * fonction récurive qui calcule le réseau de neurone
    *
    * @param input vecteur valeur d'entrer
    * @param func fonction d'activation (ReLu, Sig, Tanh, Heaviside)
    * @param funcExt fonction d'activation pour la dernière couche (default funcExt = func)
    * @param acc détermine la fin de la fonction récursive (default acc = 0)
    * @returns retourne un vecteur
    */
    public calculate(input:Matrix|number[][], func:Func, funcExt:Func = func, acc:number = 0):number[][] {
        const inp:Matrix = input instanceof Matrix ? input : new Matrix(input)

        if ((inp.rows !== this.nbInput || inp.columns !== 1) && acc === 0) return [[0]]

        const prod:Matrix = this.getWeight(acc).mmul(inp)
        const add:Matrix = Matrix.add(prod, this.getBias(acc))
        const f:Func = acc < this.nbLayer - 1 ? func : funcExt
        const res:Matrix = activ(add, f)

        if (acc === this.nbLayer - 1)
            this.setOutput(res)

        return acc < this.nbLayer - 1 ? this.calculate(res, func, funcExt, acc + 1) : res.toJSON()
    }

    /**
    * fait une copie du réseau de neurone
    *
    * @returns retourne la copie
    */
    public clone():NeuralNetwork {
        const newNet:NeuralNetwork = new NeuralNetwork(this.nbInput)
        newNet.setNbLayer(this.getNbLayer())
        newNet.setOutput(this.getOutput().clone())
        newNet.setAllWeight([...this.getAllWeight()])
        newNet.setAllBias([...this.getAllBias()])

        return newNet
    }

    public backProp(err:number):void {
        //TODO : implement backprops
    }
    
    /**
    * modifie les poids et les biais du réseau de neurone en fonction de mutationChance
    */
    public mutate():void {
        const weight:Matrix[] = this.getAllWeight().map(elem => this.change(elem))
        const bias:Matrix[] = this.getAllBias().map(elem => this.change(elem))

        this.setAllWeight(weight)
        this.setAllBias(bias)
    }

    private change(elem:Matrix):Matrix {
        const probs:Matrix = Matrix.rand(elem.rows, elem.columns, { random:rand2 })
        const mutationProbs:Matrix = new Matrix(probs.toJSON().map(rows => 
            rows.map(cols => cols < this.mutationChance ? rand2() : 0)
        ))

        return Matrix.add(elem, mutationProbs)
    }

    /**
    * faite une copie et retourne la mutation
    *
    * @returns retourne une copie modifiée
    */
    public cloneMutate():NeuralNetwork {
        const net:NeuralNetwork = this.clone()
        net.mutate()
        
        return net
    }

    // getter / setter

    public setNbLayer(layer:number):void { this.nbLayer = layer }
    public getNbLayer():number { return this.nbLayer }

    public setReward(reward:number):void { this.reward = reward }
    public getReward():number { return this.reward }

    public getOutput():Matrix { return this.output }
    public getOutputJSON():number[][] { return this.output.toJSON() }
    public setOutput(output:Matrix) { this.output = output }

    public getWeight(i:number):Matrix { return this.weight[i] }
    public getAllWeight():Matrix[] { return this.weight }
    public addWeight(weight:Matrix):void { this.weight = [...this.weight, weight] }
    public setWeight(i:number, weight:Matrix):void { this.weight[i] = weight }
    public setAllWeight(weight:Matrix[]):void { this.weight = weight }

    public getBias(i:number):Matrix { return this.bias[i] }
    public getAllBias():Matrix[] { return this.bias }
    public addBias(bias:Matrix):void { this.bias = [...this.bias, bias] }
    public setBias(i:number, bias:Matrix):void { this.bias[i] = bias }
    public setAllBias(bias:Matrix[]):void { this.bias = bias }
}