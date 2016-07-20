import $ from 'jquery';
import Bb from 'backbone';

import router from '../router';
import user from '../models/session';
import settings from '../settings';

const Feed = Bb.View.extend({
  tagName: 'div',
  className: 'feedbox',

  // this will pull collection of posts and build a div for each one
  // render: function () {
  //   this.$el.append(this.template);
  //   return this;
  // },

});

let feed = new Feed();
export default feed;
