$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});

	$("a").mouseenter(function() {
		$(this).removeClass("makeRed").addClass("makeBorder");
	});

	$("a").mouseleave(function() {
		$(this).removeClass("makeBorder").addClass("makeRed");
	});

	$("a").click(function() {
		$("p").slideToggle(2000);
	});
  
	$("a").click(function() {
		$("p").hide(2000).show(2000);
	});
}); 
