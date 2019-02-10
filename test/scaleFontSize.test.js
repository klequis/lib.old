import * as assert from 'assert'
import { scaleFontSize } from '../src/scaleFontSize'

const tests = [
  {
    input: {
      size: '15rem',
      percent: 20,
    } ,
    result: '18rem',
    description: 'should return 18rem',
  },
]

describe('Array', () => {
  tests.forEach((sample) => {
    it(sample.description, () => {
      assert.equal(scaleFontSize(sample.input.size, sample.input.percent), sample.result);
    });
  });
});
