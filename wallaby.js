module.exports = function () {
  return {
    "files": [
      {pattern: 'node_modules/phantomjs-polyfill/bind-polyfill.js', instrument: false},
      {pattern: 'node_modules/angular/angular.js', instrument: false},
      {pattern: 'node_modules/angular-route/angular-route.js', instrument: false},
      {pattern: 'node_modules/angular-mocks/angular-mocks.js', instrument: false},
      'js/**/*.js'
    ],
    "tests": [
      'test/unit/**/*.js'
    ]
  };
};
