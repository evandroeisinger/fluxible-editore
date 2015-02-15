'use strict';

var React = require('react/addons'),
    FluxibleMixin = require('fluxible').Mixin;

module.exports = React.createClass({
  mixins: [FluxibleMixin],
  
  getInitialState: function () {
    return {};
  },

  _getArticles: function() {
    return {};
  },

  componentDidMount: function() {
  },
  
  render: function() {
    return (
      <section id="article-list">
      </section>
    );
  }
});
