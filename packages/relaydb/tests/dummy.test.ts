import {describe, expect, test} from 'vitest';
import {dummy} from '../src/index.js';

describe('utils', async () => {
  test('deepEqual', () => {
    expect(dummy).to.equal(42);
  });
});
