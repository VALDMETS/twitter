import $ from 'jquery';
import Bb from 'backbone';
import moment from 'moment';

// import router from '../router';
import session from '../models/session';
// import settings from '../settings';

const BumblView = Bb.View.extend({
    tagName: 'div',
    className: 'bumbl',
    render: function(bumbl) {
        if (session.get('username') != bumbl.get('poster')) {
            this.$el.append(`
        <p>${bumbl.get('body')}</p>
        <p>Bumbled by ${bumbl.get('poster')}, ${moment(bumbl.get('timestamp')).fromNow()}</p>

      `);
        } else {
            this.$el.append(`
        <p>${bumbl.get('body')}</p>
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
      console.log(evt.target.dataset.id);
    },
    deleteFunction: function (evt) {
      console.log(evt.target.dataset.id);
    }
});

// let bumblView = new Bumbl();
export default BumblView;
