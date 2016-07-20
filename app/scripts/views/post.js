import $ from 'jquery';
import Bb from 'backbone';

import router from '../router';
import user from '../models/session';
import settings from '../settings';
import Post from '../models/post';
import bumblList from '../collections/postcollection';

const PostForm = Bb.View.extend({
  tagName: 'form',
  className: 'newpost',
  template: `
    <h4>Tell us your thoughts...</h4>
    <div class="postdiv">
      <textarea id="posttext rows="8" cols="40"></textarea>
      <input type="button" class="postsubmit" value="BUMBL IT">
    </div>
  `,
  render: function () {
    this.$el.append(this.template);
    return this;
  },
  events: {
    'click .postsubmit' : 'postFunction'
  },
  postFunction: function (evt){
  // console.log(user);
    let post = new Post();
    post.set({
      poster: user.get('username'),
      body: $('textarea').val()
    });
    // console.log(post);
    // console.log($('textarea').val());
    post.save(null, {
      data: JSON.stringify({
        poster: post.get('poster'),
        body: post.get('body'),
        likes: post.get('likes'),
        timestamp: post.get('timestamp')
    }),

      contentType: 'application/json',
      success: function() {
        bumblList.add(post);
        console.log('got em coach');
      },
      error: function() {
        console.log('ugh');
      }
    });
  }

});

let postForm = new PostForm();
export default postForm;
