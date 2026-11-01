const assert = require('node:assert/strict');
const http = require('node:http');
const { before, after, test } = require('node:test');
const server = require('../app.js');

before(() => new Promise(resolve => server.listen(0, '127.0.0.1', resolve)));
after(() => new Promise(resolve => server.close(resolve)));

test('GET / returns the greeting and HTTP 200', async () => {
  const result = await new Promise((resolve, reject) => {
    http.get(`http://127.0.0.1:${server.address().port}/`, res => {
      let body = '';
      res.on('data', chunk => { body += chunk; });
      res.on('end', () => resolve({ status: res.statusCode, body, type: res.headers['content-type'] }));
      res.on('error', reject);
    }).on('error', reject);
  });
  assert.equal(result.status, 200);
  assert.equal(result.type, 'text/plain');
  assert.equal(result.body, 'Hello World. My name is yosish datla');
});
