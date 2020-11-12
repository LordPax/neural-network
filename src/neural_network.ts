import { rand, ReLu, sig, Tanh } from './until'
import { Matrix } from 'ml-matrix'

export class NeuralNetwork {
    private nbInput:number
    private nbOutput:number
    private nbLayer:number

    private input:Matrix
    private output:Matrix
    private weight:Matrix[]
    private bias:Matrix[]

    constructor(nbInput:number, nbOutput:number) {
        this.nbInput = nbInput
        this.nbOutput = nbOutput
        this.nbLayer = 0

        this.weight = []
        this.bias = []

        this.setInput(Matrix.zeros(nbInput, 1))
        this.setOutput(Matrix.zeros(nbOutput, 1))
    }

    /**
    * ajoute une layer avec nbNode neurone
    *
    * @param nbNode : nombre de neurone pour cette layer
    * @returns rien
    */
    public addLayer(nbNode:number):void {
        this.addWeight(Matrix.rand(nbNode, this.nbLayer === 0 ? 
            this.nbInput : this.getWeight(this.nbLayer - 1).rows, 
            { random:rand }
        ))

        this.addBias(Matrix.rand(nbNode, 1, { random:rand }))

        this.nbLayer += 1
    }

    /**
    * calcule le réseau de neurone
    *
    * @param input : valeur d'entrer
    * @returns retourne le resultat du calcule sous forme de tableau d'entier
    */
    public calculate(input:number[][], acc:number = 0):number[][] {
        return [[0]]
    }

    public clone():void {
        
    }
    
    public mutate():void {

    }

    // getter / setter

    public getInput():Matrix {
        return this.input
    }
    public setInput(input:Matrix) {
        this.input = input
    }

    public getWeight(i:number):Matrix {
        return this.weight[i]
    }
    public addWeight(weight:Matrix) {
        this.weight = [...this.weight, weight]
    }
    public setWeight(i:number, weight:Matrix) {
        this.weight[i] = weight
    }

    public getOutput():Matrix {
        return this.output
    }
    public setOutput(output:Matrix) {
        this.output = output
    }

    public getBias(i:number):Matrix {
        return this.bias[i]
    }
    public addBias(bias:Matrix) {
        this.bias = [...this.bias, bias]
    }
    public setBias(i:number, bias:Matrix) {
        this.bias[i] = bias
    }
}