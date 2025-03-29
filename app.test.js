const request = require('supertest');
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the API!' });
});

describe('Express App', () => {
    it('should return Hello, World! on GET /', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello, World!');
    });

    it('should return API response on GET /api', async () => {
        const response = await request(app).get('/api');
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ message: 'Hello from the API!' });
    });
});

