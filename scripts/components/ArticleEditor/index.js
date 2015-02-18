'use strict';

var React = require('react/addons'),
    Editore = require('editore'),
    FluxibleMixin = require('fluxible').Mixin;

module.exports = React.createClass({
  mixins: [FluxibleMixin],
  
  getInitialState: function () {
    return {};
  },

  _onSave: function() {
    if (this.editore)
      console.log(this.editore.values());
  },

  _onEdit: function(e) {
    var form = this.getDOMNode().getElementsByTagName('form')[0];
    this.editore = new Editore(form);
  },

  _onCancel: function(e) {
    e.preventDefault();
    this.editore.destroy();
    this.editore = null;
  },
  
  render: function() {
    return (
      <section id="article-editor">
        <form>
          <h1 className="field" data-field="title" data-placeholder="Title" data-required="true" data-length="60">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
          <h3 className="field" data-field="description" data-placeholder="Description" data-length="170">Mauris tortor metus, mollis eget mollis nec, porttitor id enim. Mauris ultrices, libero a eleifend rhoncus, odio sem tincidunt lectus, id pulvinar ante tellus ac tellus</h3>
          <article className="field" data-field="articleBody" data-placeholder="Article Body" data-required="true" data-type="rich">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec dapibus massa, id dapibus neque. Donec tellus diam, interdum ut felis vitae, iaculis commodo nunc. Mauris tortor metus, mollis eget mollis nec, porttitor id enim. Mauris ultrices, libero a eleifend rhoncus, odio sem tincidunt lectus, id pulvinar ante tellus ac tellus. Nullam gravida, turpis ut consectetur pretium, massa neque hendrerit ante, non bibendum risus tellus ut lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Proin vel luctus diam, non ornare sem. Nam massa mauris, mattis vel rutrum eu, finibus eu elit. Donec id vestibulum nulla. Praesent ligula velit, sodales sed purus ut, varius rutrum magna. Cras vulputate vehicula nibh sit amet consectetur. Duis euismod massa aliquet, pulvinar urna ut, molestie ipsum. Aenean rutrum, arcu vel semper dapibus, lectus nisl sollicitudin nibh, nec fringilla nibh est quis erat. Vestibulum molestie sapien non arcu euismod, a malesuada dui pharetra. Fusce vestibulum iaculis libero, at vulputate elit.</p>
            <p>Donec suscipit varius ornare. Maecenas luctus sagittis nunc, sit amet facilisis justo lobortis quis. Pellentesque finibus imperdiet libero vel mollis. Quisque in augue mauris. Nunc nec faucibus urna. Fusce consequat, nibh eget condimentum ultricies, nisi urna fringilla sem, et porttitor urna massa in elit. Nunc mi ligula, feugiat sed metus eget, sagittis bibendum augue. Ut metus mauris, sagittis at venenatis vel, porta ac sem.</p>
            <p>Pellentesque lacinia dolor eu mi dapibus, sed fringilla orci dictum. Sed ultrices ullamcorper est semper varius. Duis tempor venenatis libero, aliquam volutpat tellus malesuada vel. In hac habitasse platea dictumst. Phasellus interdum varius magna consectetur fermentum. Cras ullamcorper ultrices tortor sed hendrerit. Aenean vestibulum ligula vitae bibendum convallis.</p>
            <p>Donec bibendum elit a massa ultricies, ac accumsan ligula pharetra. Proin dolor ex, interdum non nibh eu, consectetur maximus justo. Suspendisse in viverra ipsum. Cras in egestas turpis. Fusce malesuada ut metus et malesuada. Duis fringilla quis tortor quis mattis. Suspendisse porttitor mollis ornare. Suspendisse sollicitudin malesuada felis, sit amet rutrum lorem efficitur sit amet. Phasellus eget aliquet est. Ut purus metus, convallis ut aliquet ac, tincidunt a urna. Ut at augue eu ligula tempus facilisis vel sit amet libero.</p>
            <p>Nulla nec eleifend orci, ut tincidunt mi. Fusce fringilla dignissim leo. Nam sed ipsum varius, tristique urna vel, luctus dolor. In quis metus nibh. Aenean eget tempus lorem. Aliquam erat volutpat. In eget lacus turpis. Maecenas rutrum quis felis nec cursus. Sed non dapibus ex, quis varius nunc.</p>
          </article>
        </form>
        <aside>
          <button onClick={ this._onSave }>Save</button>
          <button onClick={ this._onEdit }>Edit</button>
          <button onClick={ this._onCancel }>Cancel</button>
        </aside>
      </section>
    );
  }
});
