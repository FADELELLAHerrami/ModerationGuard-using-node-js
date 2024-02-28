const app = require('../../app');
const fetchMock = require('jest-fetch-mock');
const request = require('supertest');

// Avant chaque test, configure fetch pour utiliser fetchMock
beforeEach(() => {
  fetchMock.enableMocks();
});

// Après chaque test, réinitialise fetchMock
afterEach(() => {
  fetchMock.resetMocks();
});

describe('API routes', () => {
  

  describe('POST /api/moderation/predict', () => {
    it('should create a moderate and return 200 status', async () => {
      // Mock de la réponse fetch
      fetchMock.mockResponseOnce(JSON.stringify({ message: 'moderate is saved' }));

      const mockModerateData = {
        text: 'test text',
        language: 'en',
      };

      const response = await request(app)
        .post('/api/moderation/predict')
        .send(mockModerateData);

      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('message', 'moderate is saved');
    });
  });
});
