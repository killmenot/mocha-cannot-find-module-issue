'use strict';

requirejs.config({
  baseUrl: '../lib',
  urlArgs: 'now=' + Date.now(),
  paths: {
    'specs': '../test/specs'
  }
});

requirejs.onError = function (err) {
  console.log(err);
  console.log(err.requireType);
  if (err.requireType === 'timeout') {
    console.log('modules: ' + err.requireModules);
  }

  throw err;
};

require([
  'specs/user.spec'
], () => {
  mocha.run();
});
