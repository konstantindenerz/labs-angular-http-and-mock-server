/**
 * https://github.com/lwsjs/local-web-server/wiki/How-to-create-a-mock-response
 */
class Mocks {
  mocks() {
    return [{
      route: '/api/user',
      responses: [
        {
          response: (ctx, ...params) => {
            ctx.body = {
              id: '474c93ca-dec8-4798-a964-34f4a6f55cfc',
              username: 'foobar',
              firstname: 'Foo',
              lastname: 'Bar'
            };
          }
        }
      ]
    }];
  }
}

module.exports = Mocks;
