'use strict';

var React = require('react'),
    Router = require('react-router'),
    Fluxible = require('fluxible'),
    app = require('./app'),
    context = app.createContext();

Router.run(app.getAppComponent(), Router.HistoryLocation, function(Handler) {
  React.withContext(context.getComponentContext(), function () {
      React.render(<Handler/>, document.getElementById('app'));
  });
});