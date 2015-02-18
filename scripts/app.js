'use strict';

var Fluxible = require('fluxible'),
    services = require('./services');

var app = new Fluxible({
    appComponent: require('./components/Routes')
});

// register services
// services.registerService(require('./services/exampleService'));

// action.js:
// function exampleAction(context, query, done) {
//   context.getService('exampleService').get(1).then(function(data) {
//     console.log(data);
//   }, function(err) {
//     console.log(err);
//   });
// }

// exampleService.js:
// module.exports = {
//   name: 'exampleService',
//   get: function(id) {
//     if (id)
//       return this.resolve(id);
//     else
//       this.reject('No id');
//   },
// }

// register service layer
app.plug(services);

module.exports = app;
