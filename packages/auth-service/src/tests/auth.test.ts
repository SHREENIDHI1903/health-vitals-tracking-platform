import request from 'supertest';
import app from '../index'; // Or your Express setup file

describe('Auth API', () => {
  it('should signup a new user', async () => {
    const res = await request(app).post('/api/auth/signup')
      .send({
        name: 'TestUser',
        email: 'test@example.com',
        password: '123456'
      });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });

  it('should login existing user', async () => {
    const res = await request(app).post('/api/auth/login')
      .send({
        email: 'test@example.com',
        password: '123456'
      });
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('token');
  });
});
