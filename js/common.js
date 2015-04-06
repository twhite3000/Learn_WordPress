$(document).ready(function() {

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});

	$(".toggle_mnu, .menu_item").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$('.toggle_mnu').on('click', function(){
		$('.top_mnu').fadeToggle(600);
		$(".top_mnu li a").toggleClass("fadeInUp animated")
	})
});
$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});