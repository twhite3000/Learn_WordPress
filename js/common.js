$(document).ready(function() {

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