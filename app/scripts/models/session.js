import $ from 'jquery';
import Bb from 'backbone';

import settings from '../settings';

const Session = Bb.Model.extend({
  defaults: {
    username: '',
    authtoken: '',
    signupDate: ''
  },
  urlRoot: `https://baas.kinvey.com/user/${settings.appKey}`

});

let session = new Session();

export default session;
