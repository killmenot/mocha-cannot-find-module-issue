(function (root, name, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    var obj = root;
    var namespaces = name.split('.');
    var _module = factory();

    for (var i = 0; i < namespaces.length; i++) {
      var packageName = namespaces[i];
      if (typeof obj[packageName] === 'undefined') {
        obj[packageName] = {};
      }
      obj = obj[packageName];
    }

    obj[_module.name] = _module;
  }
}(this, 'MyApp.Models', function () {
  'use strict';

  function User(name) {
    this.name = name;
  }

  User.prototype.getName = function () {
    return this.name;
  }

  return User;
}));
