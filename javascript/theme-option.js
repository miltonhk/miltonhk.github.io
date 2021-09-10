jQuery(document).ready(function($) { 

$("ul.color li a").click(function(){
  var color = $(this).attr('value');
  if ($("#css_color_style").length > 0){
	  $("#css_color_style").remove();
  }
  $("head").append("<link>");
  css = $("head").children(":last");
  css.attr({
    rel:  "stylesheet",
    type: "text/css",
    id: "css_color_style",
    href: "css/colors/color-" + color + ".css"
  });
 })

 $("#panel a.open").click(function(){
  var margin_left = $("#panel").css("margin-left");
  if (margin_left == "-170px"){
  $("#panel").animate({marginLeft: "0px"});
 }
 else{
  $("#panel").animate({marginLeft: "-170px"});
 }

 })

}); 