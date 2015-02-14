'use strict';

var Fluxible = require('fluxible'),
    services = require('./services');

var app = new Fluxible({
    appComponent: require('./components/Routes')
});

// register service layer
app.plug(services);

module.exports = app;
