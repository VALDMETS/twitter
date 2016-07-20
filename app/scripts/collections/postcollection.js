import $ from 'jquery';
import Bb from 'backbone';

import Post from '../models/post';
import settings from '../settings';

let BumblList = Bb.Collection.extend({
  model: Post,
  url: `https://baas.kinvey.com/appdata/${settings.appKey}/bumbls`,
});

let bumblList = new BumblList();

export default bumblList;
