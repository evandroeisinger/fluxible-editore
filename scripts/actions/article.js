'use strict';

module.exports = {
  fetchArticles: function(context) {
    context.getService('article').getAll().then(function(data) {
      context.dispatch('ARTICLES_FETCHED', data.articles);
    });
  },
}
