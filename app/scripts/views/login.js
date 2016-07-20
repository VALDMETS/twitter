import $ from 'jquery';
import Bb from 'backbone';

import router from '../router';
import session from '../models/session';
import settings from '../settings';

const LoginPage = Bb.View.extend({
  tagName: 'form',
  className: 'loginpage',
  template: `
    <h3>WELCOME TO BUMBLR</h3>
    <input type="text" id="loginname" placeholder="USERNAME">
    <input type="password" id="loginpassword">
    <input type="submit" class="loginsubmit" value="GET BUMBLIN">
    <input type="button" class="tosignup" value="Don't have a Bumblr Account? Sign Up For Free!">
  `,
  render: function () {
    this.$el.append(this.template);
    return this;
  },
  events: {
    'submit'          : 'submitFunction',
    'click .tosignup' : 'toSignupFunction'
  },
  submitFunction      : function (evt) {
    evt.preventDefault();
    let username = $('#loginname').val();
    let password = $('#loginpassword').val();
    session.save({username: username, password: password}, {
      url: `https://baas.kinvey.com/user/${settings.appKey}` + '/login',
      success: function (user, resp) {
        session.unset('password');
        session.set({
          username: username,
          authtoken: resp._kmd.authtoken
        });
        router.navigate('feed', {trigger: true});
      },
      error: function () {
        console.log('Whoops! Looks like you need to sign up.');
      }
    });
  },
  toSignupFunction    : function () {
    router.navigate('signup', {trigger: true});
  }
});

let loginPage = new LoginPage();
export default loginPage;
