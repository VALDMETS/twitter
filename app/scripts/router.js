import $ from 'jquery';
import Bb from 'backbone';

import loginPage from './views/login';
import signupPage from './views/signup';
import postForm from './views/post';
import Feed from './views/feed';
// import bumblList from './collections/postcollection';

const Router = Bb.Router.extend({
  routes: {
    'login'     : 'loginFunction',
    'signup'    : 'signupFunction',
    'feed'      : 'feedFunction',
    '/*'        : 'loginFunction'
  },
  loginFunction: function() {
    $('.formcontainer').empty().append(loginPage.render().$el);
  },
  signupFunction: function() {
    $('.formcontainer').empty().append(signupPage.render().$el);
  },
  feedFunction: function() {
    let feed = new Feed();
    $('.formcontainer').empty().append(postForm.render().$el);
    $('.feedcontainer').empty().append(feed.$el);
  }
});

const router = new Router();
export default router;
