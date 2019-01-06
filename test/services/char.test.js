const assert = require('assert');
const app = require('../../src/app');

describe('\'char\' service', () => {
  it('registered the service', () => {
    const service = app.service('char');

    assert.ok(service, 'Registered the service');
  });
});
