import request from 'supertest';
import { app } from '../src/app';

describe('GET /api/weather', () => {
   it('returns 200 and a health', async () => {
     const res = await request(app).get('/api/health');
     expect(res.status).toBe(200);
     expect(res.headers['content-type']).toMatch(/json/);
   });
   it('returns 404 for if not health', async () => {
     const res = await request(app).get('/api');
     expect(res.status).toBe(404);
   });
  it('returns 200 and a weather', async () => {
    const res = await request(app).get('/api/weather/current?city=Seoul');
    expect(res.status).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
  });
   it('returns 404 for a not weather', async () => {
     const res = await request(app).get('/api/weather/current');
     expect(res.status).toBe(400);
   });
});
