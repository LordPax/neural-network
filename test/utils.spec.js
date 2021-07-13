const assert = require('assert')
const { roundNumber } = require('../build/src/utils')

describe('utils', () => {
    describe('#roundNumber()', () => {
        it('should round 5.21483292 => 5.21', () => {
            assert.strictEqual(roundNumber(5.21483292, 2), 5.21) 
        })
        it('should round 8.1987382 => 8.2', () => {
            assert.strictEqual(roundNumber(8.1987382, 1), 8.2) 
        })
    })
    describe('#ReLu()', () => {

    })
})