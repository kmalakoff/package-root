const assert = require('assert');
const moduleRoot = require('module-root-sync');

describe('exports .cjs', () => {
  it('defaults', () => {
    assert.equal(typeof moduleRoot, 'function');
  });
});
