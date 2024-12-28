import assert from 'assert';

// @ts-ignore
import moduleRoot from 'module-root-sync';

describe('exports .ts', () => {
  it('defaults', () => {
    assert.equal(typeof moduleRoot, 'function');
  });
});
