import $ from 'jquery';
import Bb from 'backbone';

import settings from '../settings';
import session from './session';

const Post = Bb.Model.extend({
  urlRoot: `baas.kinvey.com/appdata/${settings.appKey}/bumbls`,
  defaults: {
    timestamp: new Date(),
    body: '',
    poster: '',
    likes: 0
  }
});


export default Post;
