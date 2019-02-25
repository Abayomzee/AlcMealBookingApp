process.env.NODE_ENV = 'test';
import chai from 'chai';
import chaiHttp from 'chai-http';
import index from '../index';
const should = chai.should();
import dummyData from '../utils/orderDummyData';


chai.use(chaiHttp);

/**
   * Test the POST /orders/ route
   */
  describe('POST /orders', () => {
    it("it should place an order for a meal available in the today's menu", (done) => {
      const id = Number(dummyData.Orders[0].id);
      const validMeal = {
        mealId: id,
        type: 'breakfast',
      };
      chai
        .request(index)
        .post('/api/v1/orders')
        .send(validMeal)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
});

  /**
   * Test the PUT /orders/:orderId route
   */
  describe('PUT /orders/:orderId', () => {
    it("it should update an ordered meal with another meal available in today's menu", (done) => {
      const orderId = Number(dummyData.Orders[0].id);
      const availableMealId = Number(dummyData.Orders[0].id);

      const newOrder = {
        mealId: availableMealId,
        type: 'dinner',
      };

      chai
        .request(index)
        .put(`/api/v1/orders/${orderId}`)
        .send(newOrder)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
});

  /**
   * Test the GET /orders route
   */
  describe('GET /orders ', () => {
    it('it should get all orders', (done) => {
      chai
        .request(index)
        .get('/api/v1/orders')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a('array');
          done();
        });
    });
});