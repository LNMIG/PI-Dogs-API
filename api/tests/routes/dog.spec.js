/* eslint-disable import/no-extraneous-dependencies */
const expect = require('chai').expect;
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Breed, conn } = require('../../src/db.js');

const agent = session(app);
const dog = {
  name: 'Chihuahua',
  height: '20 - 35',
  weight: '15 - 32',
  life_span: 'none',
  image: 'none',
  temperaments: 'Friendly'
};
const dogg = {
  name: 'Callejeero',
  height: '20 - 35',
  weight: '15 - 32',
  life_span: 'none',
  image: 'none',
  temperaments: 'Alert'
};

describe('Dogs PI routes testing', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));

  beforeEach(() => Breed.sync({ force: true })
    .then(() => {Breed.create(dog); Breed.create(dogg)}));

  describe('GET /dogs/:idBreed', () => {
    it('should respond with 200', () => {
      return agent.get('/dogs/10').expect(200);
    });
    it('should responde with 404', () => {
      return agent.get('/dogs/200000').expect(404);
    });
    it('should responde with string "Sorry, there is no..."', () => {
      return agent.get('/dogs/200000').expect('Sorry, there is no breed matching your search', true);
    });
  });

  describe('GET /temperament', () => {
    it('should respond with 200 when getting temperaments', async () => {
      return agent.get('/temperament').expect(200)
    });

    it('should respond with data of json type when getting temperaments', async () => {
      return agent.get('/temperament').expect('Content-Type', /json/)
    });

    it('should responde with an array of temperaments', () => {
      return agent.get('/temperament')
      .expect(function (res) {
        expect(res.body).to.be.an('array')
      });
    });
});

  describe('POST /dog', () => {
    it('should respond with 201 when adding a new breed', () => {
      return agent.post('/dog')
      .send(
        {
        name: 'Callejero',
        height: '20 - 35',
        weight: '15 - 32',
        life_span: 'none',
        image: 'none',
        temperaments: 'Friendly'
      }).expect(201);
    });

    it('should respond with 204 when trying to add an existing breed', () => {
      return agent.post('/dog')
      .send(
        {
        name: 'Chihuahua',
        height: '20 - 35',
        weight: '15 - 32',
        life_span: 'none',
        image: 'none',
        temperaments: 'Friendly'
      }).expect(204)
    });

    it('should respond with an existing dog data', () => {
      return Breed.findOne({
          where: { name: 'Chihuahua'}
        })
      .then(dog => {
        expect(dog).to.exist});
    });
    
  });
});
