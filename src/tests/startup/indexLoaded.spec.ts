import hostApp from '../../app';
import chai from 'chai';
import chaiHttp from 'chai-http'

chai.use(chaiHttp);

describe('Hey API Request', () => {
  it('should return success response on call', async () => {
    let response = await chai.request(hostApp).get('/index')
    chai.expect(response.status).to.eql(200);
  })
})
