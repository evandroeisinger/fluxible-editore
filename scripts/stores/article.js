'use strict';

var createStore = require('fluxible/utils/createStore');

module.exports = createStore({
  storeName: 'ArticleStore',

  handlers: {
    'ARTICLES_FETCHED': '_fetchArticles'
  },

  initialize: function () {
    this._articles = [];
  },

  getAll: function(){
    return this._articles;
  },

  _fetchArticles: function(articles) {
    this._articles = articles;
    this.emitChange();
  },
});
