import $ from 'jquery';
import Bb from 'backbone';

import router from './router';
import settings from './settings';
import user from './models/session';

// router.navigate('login', {trigger: true});

$(document).ajaxSend(function(e, xhr, jqueryAjax) {
  console.log('intercepted');
  if (user.get('authtoken')) {
    xhr.setRequestHeader('Authorization', 'Kinvey ' + user.get('authtoken'));
  } else {
    xhr.setRequestHeader('Authorization', 'Basic ' + settings.basicAuth);

  }
});

console.log('wow wee');

Bb.history.start();
