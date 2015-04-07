$(document).ready(function() {
	$(document).ready(function() {
		$(".popup").magnificPopup({type:"image"});
	});

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");
	$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");
	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
	$(".animation_3").animated("fadeInRight", "fadeOutRight");
	$(".animation_1").animated("flipInY", "flipOutY");

	function heightDetect() {
		$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});

	$(".toggle_mnu").click(function() {
		$(".sandwich").toggleClass("active");
	});

	$(".toggle_mnu").on("click", function(){
		$(".top_mnu").fadeToggle(550);
		$(".top_mnu li").toggleClass("fadeInUp animated")
		$(".top_text").toggleClass("h_opacify")
		$(".toggle_mnu").toggleClass("container toggle_mnu_active")
	});
});
$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});