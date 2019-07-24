$(document).ready( function(){

  lightbox();

});

const lightbox = () => {
  $(document).on('click', '[data-toggle="lightbox"]', (e) => {
    event.preventDefault();
    $(this).ekkoLightbox();
  });
}