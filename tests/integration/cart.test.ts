import axios from 'axios';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import Sinon from 'sinon';
import api from '../../src/api';
import { allCartsByUserMock, responseCartHistory, user4Th } from '../mocks/reponseApi.mock';

chai.use(chaiHttp);

describe('GET /cart-history', () => {
  describe('Ao chamar passando id 4', () => {
    beforeEach(() => {
      Sinon.stub(axios, 'get')
        .onFirstCall()
        .resolves({ data: user4Th })
        .onSecondCall()
        .resolves({ data: allCartsByUserMock });
    });
    afterEach(Sinon.restore);
    it('Espera status 200', async () => {
      const request = await chai.request(api)
        .get('/cart-history?id=4');

      expect(request.status).to.equal(200);
    });

    it('Espera que o body da response esteja correto', async () => {
      const request = await chai.request(api)
        .get('/cart-history?id=4');

      expect(request.body).to.deep.equal(responseCartHistory);
    });
  });
});
