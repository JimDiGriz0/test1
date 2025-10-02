import set from '../src/set.js';
import { strict as assert } from 'node:assert';

const obj = {};

assert.deepEqual(
  set(obj, 'key1', 'value1'),
  { key1: 'value1' },
  'Функция работает неверно!'
);

assert.deepEqual(
  set(obj, 'key1', 'next value'),
  { key1: 'value1' },
  'Функция работает неверно!'
);

console.log('Все тесты пройдены!');
