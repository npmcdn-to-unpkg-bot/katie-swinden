$(document).foundation();

$('body').removeClass('fade-out');

$('.gallery').flickity({
  // options
  imagesLoaded: true,
  setGallerySize: false,
  arrowShape: {
      x0: 10,
  x1: 60, y1: 50,
  x2: 60, y2: 40,
  x3: 20
    }
});


$('a[href*="#"]:not([href="#"])').click(function() {
if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  var target = $(this.hash);
  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
  if (target.length) {
    $('html, body').animate({
      scrollTop: target.offset().top
    }, 1000);
    return false;
  }
}
});