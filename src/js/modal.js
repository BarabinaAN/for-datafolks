$("body").on('show.bs.modal', function (event) {
   let button = $(event.relatedTarget)
   let recipient = $(button).find('span')[0].innerHTML;
   let srcImg = $(button).find('img').attr('src');
   let modal = $(this)

   modal.find('.modal-title').text('' + recipient)
   modal.find('.modal-body .project__preview img').attr({"src":`${srcImg}`, "alt":`${recipient}`})
   modal.find('.modal-body .project__preview span').attr({"src":`${srcImg}`, "alt":`${recipient}`})
});