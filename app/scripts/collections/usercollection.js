import $ from 'jquery';
import Bb from 'backbone';

import User from '../models/user';
import settings from '../settings';

let UserList = Bb.Collection.extend({
  model: User,
  url: `https://baas.kinvey.com/user/${settings.appKey}`,
});

let userList = new UserList();

export default userList;
