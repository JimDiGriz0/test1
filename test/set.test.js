import set from '../src/set.js'
import { strict as assert } from 'node:assert'

assert.equal(set({ first: 'step' }, 'first'), 'step')
assert.equal(set({ first: 'step' }, 'first', 'newValue'), 'step')
assert.equal(set({ first: 'step' }, 'second', 'newValue'), 'newValue')

console.log('Все тесты пройдены!')
