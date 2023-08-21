const { Breed, conn } = require('../../src/db.js');
const expect = require('chai').expect;

describe('Breed model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Breed.sync({ force: true }));
    describe('name', () => {
      
      it('should throw an error if name is null', (done) => {
        Breed.create({
          name: null,
          height: '162 - 190',
          weight: '523 - 765',
          life_span: '10 - 20'
        })
          .then((res)=> done(new Error('It requires a valid name')))
          .catch((e) => done());
      });

      it('should throw an error if height is null', (done) => {
        Breed.create({
          name: 'Galgo',
          height: null,
          weight: '523 - 765',
          life_span: '10 - 20'
        })
          .then((res)=> done(new Error('It requires a valid height')))
          .catch((e) => done());
      });

      it('should throw an error if weight is null', (done) => {
        Breed.create({
          name: 'Galgo',
          height: '162 - 190',
          weight: null,
          life_span: '10 - 20'
        })
          .then((res)=> done(new Error('It requires a valid weight')))
          .catch((e) => done());
      });

      it('should throw an error if life_span is undefined', (done) => {
        Breed.create({
          name: 'Galgo',
          height: '162 - 190',
          weight: null,
          life_span: undefined
        })
          .then((res)=> done(new Error('It requires a valid life_span value')))
          .catch((e) => done());
      });

      it('should work when its a valid name', () => {
        Breed.create({ 
          name: 'Dog',
          height: '162 - 190',
          weight: '523 - 765',
          life_span: '10 - 20'
        })
          .then((res) => expect(res).toBe(200))
          .catch(() => done())
      });
    });
  });
});
