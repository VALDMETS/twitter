import $ from 'jquery';
import Bb from 'backbone';
import moment from 'moment';

// import router from '../router';
import session from '../models/session';
import bumblList from '../collections/postcollection';
// import settings from '../settings';

const BumblView = Bb.View.extend({
    tagName: 'div',
    className: 'bumbl',
    render: function(bumbl) {
        if (session.get('username') != bumbl.get('poster')) {
            this.$el.append(`
        <p class="bumblframe">${bumbl.get('body')}</p>
        <p>Bumbled by <span>${bumbl.get('poster')}</span>, ${moment(bumbl.get('timestamp')).fromNow()}</p>

      `);
        } else {
            this.$el.append(`
        <p class="bumblframe">${bumbl.get('body')}</p>
        <p>Bumbled by you, ${moment(bumbl.get('timestamp')).fromNow()}</p>
        <input data-id="${bumbl.get('_id')}" type="button" class="editbumbl" value="EDIT">
        <input data-id="${bumbl.get('_id')}" type="button" class="deletebumbl" value="DELETE">
      `);

        }
        return this;
    },
    events: {
        'click .editbumbl'  : 'editFunction',
        'click .deletebumbl': 'deleteFunction'
    },
    editFunction: function (evt) {
      let temp = $(evt.target).parent().find('.bumblframe').text();
      $(evt.target).parent().empty().prepend(`
        <textarea class="editbox">${temp}</textarea>
        <input type=button class="resubmit" value="RESUBMIT">
        `);
      $('.resubmit').click(function(){
        let editBumbl = bumblList.get(evt.target.dataset.id);
        editBumbl.set({
          body: $('.editbox').val(),
          timestamp: new Date()
        });
        editBumbl.save(null, {
          success: function() {
            bumblList.fetch();
          },
          error: function() {
            console.log('whoops it didnt edit');
          }
        });
      });
    },
    deleteFunction: function (evt) {
      let deleteBumbl = bumblList.get(evt.target.dataset.id);
      deleteBumbl.destroy();
    }
});

// let bumblView = new Bumbl();
export default BumblView;
