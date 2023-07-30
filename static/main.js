// preloader
$(window).on('load', function () {
      $("#status").fadeOut();
      $("#preloader").delay(100).fadeOut("fast");
      $("body").delay(100).css({overflow: "visible"});
});

// hide menu after click menu item
$(document).on('click','.navbar-collapse',function(e) {
    if( $(e.target).is('a') && ( $(e.target).attr('class').indexOf('dropdown-toggle') == -1) ) {
        $(this).collapse('hide');
    }
});

