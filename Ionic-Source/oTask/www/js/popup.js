$(document).ready(function(){
    $(".task_li").click(function(){
	//alert($(this).data("desc"));
	
       $("#popup").show();
       $("#pop_content").html($(this).data("desc"));
       $("#popup_overlay").show();
       $(".pop_close").show();
	   $(".agree").hide();
       $(".bar-footer").hide();
    });
	
	$("#pop_close").click(function(){
	    $('.close_pop_box').removeClass("tickMark");
       $("#popup").hide();
       $("#popup_overlay").hide();
       $(".pop_close").hide();
       $(".bar-footer").show();
    });
	
	$("#clearListFn").click(function(){
	//alert($(this).data("desc"));
	   $('.close_pop_box').addClass("tickMark");
       $("#popup").show();
	   $("#pop_content").html("Do you really want to clear list ?");
	   $(".pop_close").show();
       $(".agree").show();
       $(".bar-footer").hide();
    });
});