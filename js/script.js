$( document ).ready(function() {

  $( "#search-bar" ).focus(function() {
  console.log('happeing');
  $('#search-bar').css('top', '10vh');
  $('header').css('opacity', '0');
setTimeout(function () {
  $('header').css('display', 'none');  
}, 300);

});

    console.log( "ready!" );
});
