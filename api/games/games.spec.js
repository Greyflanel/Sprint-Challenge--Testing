const request = require('supertest');
const server = require('../server');

describe('gamesRouter.js', () => {
    describe('GET', () => {
        it('should return status 200', async () => {
            const games = await request(server)
            .get('/api/games')
            expect(games.status).toBe(200)
        })

        it('should return status 200 using promises', () => {
            return request(server)
            .get('/api/games')
            .then(games => {
                expect(games.status).toBe(200)
            })
        })

    })
})