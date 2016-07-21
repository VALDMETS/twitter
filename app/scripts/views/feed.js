import $ from 'jquery';
import Bb from 'backbone';

import router from '../router';
// import session from '../models/session';
import settings from '../settings';
import bumblList from '../collections/postcollection';
import BumblView from './bumbl';
import userList from '../collections/usercollection';

const Feed = Bb.View.extend({
  initialize: function () {
    bumblList.on('update', () => {
      this.render();
    });
    bumblList.fetch({
      error: function () {
        router.navigate('login', {trigger: true});
      }
    });

    // userList.fetch({
    //   success: function () {
    //     console.log(userList);
    //   }
    // });
  },
  tagName: 'div',
  className: 'feedbox',
  render: function() {
      this.$el.html('');
      bumblList.each((bumbl) => {
        let bumblView = new BumblView();
        this.$el.prepend(bumblView.render(bumbl).$el);
        });
    return this;
  }
});
export default Feed;
