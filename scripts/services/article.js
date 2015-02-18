'use strict';

var articles = {
  "articles": [
    {
      "id": 1,
      "title": "1 Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      "description": "Mauris tortor metus, mollis eget mollis nec, porttitor id enim. Mauris ultrices, libero a eleifend rhoncus, odio sem tincidunt lectus, id pulvinar ante tellus ac tellus",
      "articleBody": "<p>Lorem ipsum dolor sit</p>"
    }
  ]
}

module.exports = {
  name: 'article',

  getAll: function() {
    this.resolve(articles);
  },
}