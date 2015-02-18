'use strict';

var React = require('react'),
    Router = require('react-router'),
    DefaultRoute = Router.DefaultRoute;

var App = require('./App'),
    ArticleEditor = require('./ArticleEditor');

module.exports = (
  <Router.Route handler={App}>
    <DefaultRoute handler={ArticleEditor}/>
  </Router.Route>
);