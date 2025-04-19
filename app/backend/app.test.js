const request = require('supertest');
const express = require('express');

// Repetimos la lógica del servidor sin escucharlo
const app = express();
app.get('/api', (req, res) => {
    res.json({ mensaje: "Hola desde el backend!" });
});

describe('Pruebas de la API', () => {
    test('GET', async () => {
        const res = await request(app).get('/api');
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('mensaje');
    });
});
