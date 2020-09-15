import 'bootstrap/dist/css/bootstrap.css';

// import $ from 'jquery';

import 'bootstrap/js/dist/modal.js';

import './images/saha.jpg';
import './images/gasprom.jpg';
import './images/nokia.jpg';

import './assets/fonts/index.scss'
import './assets/index.scss';

$("body").on('show.bs.modal', function () {
   var button = $(event.relatedTarget) // Button that triggered the modal
   console.log(button);
   var recipient = button.data('whatever') // Extract info from data-* attributes
   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
   var modal = $(this)
   modal.find('.modal-title').text('New message to ' + recipient)
   modal.find('.modal-body input').val(recipient)
   // $("#exampleModal").modal('show');
});