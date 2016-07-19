import $ from 'jquery';
import Bb from 'backbone';

import settings from '../settings';

const User = Bb.Model.extend({
  defaults: {
    username: '',
    authtoken: '',
    signupDate: ''
  },
  urlRoot: `https://baas.kinvey.com/user/${settings.appKey}`

});

let user = new User();

export default user;
