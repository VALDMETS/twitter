import $ from 'jquery';
import Bb from 'backbone';

import loginPage from './views/login';
import signupPage from './views/signup';

const Router = Bb.Router.extend({
  routes: {
    'login'     : 'loginFunction',
    'signup'    : 'signupFunction',
    'feed'      : 'feedFunction',
    '/*'        : 'loginFunction'
  },
  loginFunction: function() {
    console.log('login');
    $('.formcontainer').empty().append(loginPage.render().$el);
  },
  signupFunction: function() {
    console.log('signup');
    $('.formcontainer').empty().append(signupPage.render().$el);
  },
  feedFunction: function() {
    console.log('feed me');
  }
});

const router = new Router();
export default router;
