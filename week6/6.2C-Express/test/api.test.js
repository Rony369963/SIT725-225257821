const request = require('supertest');
const { expect } = require('chai');
const app = require('../src/app');

describe('Express API endpoints', () => {
  it('GET /api/health should return status ok', async () => {
    const response = await request(app).get('/api/health');

    expect(response.status).to.equal(200);
    expect(response.body).to.deep.equal({ status: 'ok' });
  });

  it('GET /api/add should return addition result for valid query params', async () => {
    const response = await request(app).get('/api/add?a=7&b=8');

    expect(response.status).to.equal(200);
    expect(response.body).to.include({ operation: 'add', a: 7, b: 8, result: 15 });
  });

  it('GET /api/add should return 400 for invalid input', async () => {
    const response = await request(app).get('/api/add?a=hello&b=8');

    expect(response.status).to.equal(400);
    expect(response.body).to.have.property('error');
  });

  it('GET /api/add should support boundary-like large finite values', async () => {
    const response = await request(app).get('/api/add?a=1000000000&b=1');

    expect(response.status).to.equal(200);
    expect(response.body.result).to.equal(1000000001);
  });
});
