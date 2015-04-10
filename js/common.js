$(document).ready(function() {

	$(".portfolio_item").each(function(i) {
		$(this).find("a").attr("href", "#work_" + i);
		$(this).find(".port_descr").attr("id", "work_" + i);
	});

	$("#portfolio_grid").mixItUp();

	$(".s_portfolio li").click(function() {
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});

	$(document).ready(function() {
		$(".popup").magnificPopup({type:"image"});
	});

	$(".popup").magnificPopup({type: "image"});
	$(".popup_content").magnificPopup({type: "inline", midClick: true})

	$(".top_text h1").animated("fadeInDown", "fadeOutUp");
	$(".top_text p").animated("fadeInUp", "fadeOutDown");
	$(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");
	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
	$(".left .resume_item").animated("fadeInLeft", "fadeOutLeft");
	$(".right .resume_item").animated("fadeInRight", "fadeOutRight");
	$(".animation_3").animated("fadeInRight", "fadeOutRight");
	$(".animation_1").animated("flipInY", "fadeOutDown");

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
	$("input, select, textarea").not("[type=submit]").jqBootstrapValidation();
});
$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});