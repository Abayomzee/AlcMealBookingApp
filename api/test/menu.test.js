process.env.NODE_ENV = 'test';
import chai from 'chai';
import chaiHttp from 'chai-http';
import index from '../index';
const should = chai.should();
import dummyData from '../utils/menuDummyData';


chai.use(chaiHttp);

 /**
   * POST the /menu/ route
   */
  describe('POST /menu', () => {
    it('it should add a meal given the id to the menu', (done) => {
      const mealId = Number(dummyData.menus[1].id);
      const meal = {
        id: mealId,
      };
      chai
        .request(index)
        .post('/api/v1/menus')
        .send(meal)
        .end((err, res) => {
          res.should.have.status(200);
          done();
        });
    });

  });

  /**
   * GET the /menu/ route
   */
  describe('GET /menu', () => {
    it('it should get all menu for today', (done) => {
      chai
        .request(index)
        .get('/api/v1/menus')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.data.should.be.a('array');
          done();
        });
    });
  });
