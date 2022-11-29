const { app } = require('../server');
const supertest = require('supertest');
const request = supertest(app);

describe('APIServer', () => {
  it('handles root path', async () => {
const response = await request.get('/');

expect(response.status).toBe(200);
expect(response.text).toBeTruthy();
expect(response.text).toBeEqual('Hello World');
  });
});

it('handles invalid requests', async () => {
  const response = await request.get('/foo');
  expect(response.status).toEqual(404);
})
