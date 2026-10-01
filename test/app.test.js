const test = require('node:test');
const assert = require('node:assert');
const { createServer } = require('../app');

function request(server) {
  return new Promise((resolve, reject) => {
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address();
      require('node:http').get(`http://127.0.0.1:${port}`, (res) => {
        let body = '';
        res.setEncoding('utf8');
        res.on('data', chunk => { body += chunk; });
        res.on('end', () => {
          server.close(() => resolve({ statusCode: res.statusCode, body }));
        });
      }).on('error', reject);
    });
  });
}

test('web app responds successfully', async () => {
  const result = await request(createServer());
  assert.strictEqual(result.statusCode, 200);
  assert.match(result.body, /DevOps CI\/CD Pipeline is Working/);
});
