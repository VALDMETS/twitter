import $ from 'jquery';
import Bb from 'backbone';

import router from '../router';
import session from '../models/session';

const SignupPage = Bb.View.extend({
  tagName: 'form',
  className: 'signuppage',
  template: `
    <h3>BUMBLR IS EASY AND FUN!</h3>
    <p>
      Bumblr is the incredible new app ready to take over the internet startup scene,
      wielding the technical capability of a 1996 chatroom with all the style of a
      hot 2009 website! Super Nostalgic!
    </p>
    <input type="text" id="signupname" placeholder="YOUR NEW USER NAME">
    <input type="password" id="signuppassword">
    <input type="submit" class="signupsubmit" value="GET BUMBLIN">
  `,
  render: function () {
    this.$el.append(this.template);
    return this;
  },
  events: {
    'submit'          : 'submitFunction',
  },
  submitFunction      : function (evt) {
    evt.preventDefault();
    let username = $('#signupname').val();
    let password = $('#signuppassword').val();
    session.save({username: username, password: password, signupDate: new Date()}, {
      success: function (user, resp) {
        session.unset('password');
        session.set({
          authtoken: resp._kmd.authtoken
        });
        router.navigate('feed', {trigger: true});
      },
      error: function () {
        console.log('Someone already took that name! Or something is wrong with the server. Try again');
      }
    });
  },
});

let  signupPage = new SignupPage();
export default signupPage;
