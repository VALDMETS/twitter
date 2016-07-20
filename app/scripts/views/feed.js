import $ from 'jquery';
import Bb from 'backbone';

import router from '../router';
import user from '../models/session';
import settings from '../settings';
import bumblList from '../collections/postcollection';
import bumblView from './bumbl';

const Feed = Bb.View.extend({
  tagName: 'div',
  className: 'feedbox',
  // attributes: {
  //   'data-id': pull from model??
  // },
  render: function() {
    // this.$el.empty();
    bumblList.fetch({
      success: () => {
        // console.log(bumblList.models);
        bumblList.each((bumbl) => {
          console.log(bumbl);
          this.$el.append(bumblView.render(bumbl).$el);
          // this.$el.append('<div>doesthispleasework</div>');
        });

      }
    });
    // console.log(bumblList);
    return this;
  }

  // this will pull collection of posts and build a div for each one
  // render: function () {
  //   this.$el.append(this.template);
  //   return this;
  // },

});

let feed = new Feed();
export default feed;
