$(document).ready(function() {

	$("#nav-btn").click(function() {
    	$(this).toggleClass('open');
        $(this).next(".drop-menu").toggleClass('open');
  });

	$("#search").click(function() {
    	$(".form-wr").slideToggle(300);
  });

});

 
      