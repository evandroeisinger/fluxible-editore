'use strict';

var React = require('react'),
    Router = require('react-router'),
    DefaultRoute = Router.DefaultRoute;

var App = require('./App'),
    ArticleList = require('./ArticleList');

module.exports = (
  <Router.Route handler={App}>
    <DefaultRoute handler={ArticleList}/>
  </Router.Route>
);