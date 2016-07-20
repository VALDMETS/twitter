import $ from 'jquery';
import Bb from 'backbone';

// import router from '../router';
// import user from '../models/session';
// import settings from '../settings';

const Bumbl = Bb.View.extend({
  tagName: 'div',
  className: 'bumbl',
  render: function(bumbl) {
    console.log(this);
    this.$el.prepend(`<p>${bumbl.get('body')}</p>`);
    return this;
  }

  // this will pull collection of posts and build a div for each one
  // render: function () {
  //   this.$el.append(this.template);
  //   return this;
  // },

});

let bumblView = new Bumbl();
export default bumblView;
