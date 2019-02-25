process.env.NODE_ENV = 'test';
import chai from 'chai';
import chaiHttp from 'chai-http';
import index from '../index';
const should = chai.should();
import dummyData from '../utils/dummyData';


chai.use(chaiHttp);

/*
  * Test the GET /meals/ route
  */
  describe('GET Meals', () => {
      it('it should GET all the Meals', (done) => {
        chai.request(index)
            .get('/api/v1/meals')
            .end((err, res) => {
                  res.should.have.status(200);
                  res.body.data.should.be.a('array');
              done();
            });
      });
  });

/**
   * Test the POST /meals/ route
   */
  describe('POST /meals', () => {
    it('it should post a meal', (done) => {
      const meal = {
        name: 'Porridge',
        size: 'Small',
        price: '300',
      };
      chai
        .request(index)
        .post('/api/v1/meals')
        .send(meal)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.data.should.have.property('id');
          res.body.data.should.have.property('name');
          res.body.data.should.have.property('size');
          res.body.data.should.have.property('price');
          done();
        });
    });
  });


  /**
   * Test the GET /meals/:id route
   */
  describe('GET /meals/:id', () => {
    it('it should GET a meal by the given id', (done) => {
      const mealId = Number(dummyData.meals[0].id);
      chai
        .request(index)
        .get(`/api/v1/meals/${mealId}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.data.should.have.property('id').eql(mealId);
          res.body.data.should.have.property('name');
          res.body.data.should.have.property('size');
          res.body.data.should.have.property('price');
          done();
        });
    });
  });



  /**
   * Test  PUT /meals/:id route
   */
  describe('PUT /meals/:id', () => {
    it('it should update a book given the id', (done) => {
      const mealId = Number(dummyData.meals[0].id);
      const updateMeal = { name: 'Coconut Rice', price: '300' };
      chai
        .request(index)
        .put(`/api/v1/meals/${mealId}`)
        .send(updateMeal)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.data.should.have.property('name').eql('Coconut Rice');
          res.body.data.should.have.property('price').eql('300');
          done();
        });
    });
  });

  /**
   * Test  DELETE /meals/:id route
   */
  describe('DELETE /meal/:id', () => {
    it('it should delete a meal given the id', (done) => {
      const mealId = Number(dummyData.meals[0].id);

      chai
        .request(index)
        .delete(`/api/v1/meals/${mealId}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

  });
