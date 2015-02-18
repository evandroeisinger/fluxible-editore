'use strict';

var Fluxible = require('fluxible'),
    services = require('./services');

var app = new Fluxible({
    appComponent: require('./components/Routes')
});

// register services
services.registerService(require('./services/article'));

// register stores
app.registerStore(require('./stores/article'));

// register service layer
app.plug(services);

module.exports = app;
