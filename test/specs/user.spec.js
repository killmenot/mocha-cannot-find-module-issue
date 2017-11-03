'use strict';

describe('User', () => {
  let User;

  beforeEach((done) => {
    require(['./user'], (_User) => {
      User = _User;

      done();
    });
  });

  it('should return name', () => {
    const user = new User('Alexey');
    const actual = user.getName();
    should(actual).equal('Alexey');
  });
});
