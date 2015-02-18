'use strict';

var React = require('react/addons'),
    Editore = require('editore'),
    FluxibleMixin = require('fluxible').Mixin;

var articleStore = require('../../stores/article'),
    articleAction = require('../../actions/article');

module.exports = React.createClass({
  mixins: [FluxibleMixin],
  statics: {
    storeListeners: {
      _onChange: [articleStore]
    }
  },
  
  getInitialState: function() {
    return { 
      article: {}
    }
  },

  componentDidMount: function() {
    var form = this.getDOMNode().getElementsByTagName('form')[0];
    this.editore = new Editore(form);
    // fetch articles
    this.context.executeAction(articleAction.fetchArticles);
  },

  _onChange: function() {
    // todo: editore validate method
    this.setState({
      article: this.context.getStore(articleStore).getAll()[0]
    });
  },

  _onSave: function() {},
  
  render: function() {
    return (
      <section id="article-editor">
        <form>
          <h1 className="field" data-field="title" data-placeholder="Title" data-required="true" data-length="60">{ this.state.article.title }</h1>
          <h3 className="field" data-field="description" data-placeholder="Description" data-length="170">{ this.state.article.description }</h3>
          <article className="field" data-field="articleBody" data-placeholder="Article Body" data-required="true" data-type="rich" dangerouslySetInnerHTML={{__html: this.state.article.articleBody}}></article>
        </form>
        <aside>
          <button onClick={ this._onSave }>Save</button>
        </aside>
      </section>
    );
  }
});
