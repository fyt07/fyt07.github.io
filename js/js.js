//     timer
jQuery(document).ready(function() {
    jQuery(".eTimer").eTimer({
      etType: 1, etDate: "12.01.2018.0.0", 
      etTitleText: "До окончания акции осталось:", 
      etTitleSize: 16, etShowSign: 1, etSep: ":", 
      etFontFamily: "Arial", etTextColor: "#333333",
      etPaddingTB: 11, etPaddingLR: 14,
      etBackground: "white", etBorderSize: 0,
      etBorderRadius: 0, etBorderColor: "white",
      etShadow: " 0px 0px 11px 0px white",
      etLastUnit: 4, etNumberFontFamily: "Arial", 
      etNumberSize: 27, etNumberColor: "#990000", 
      etNumberPaddingTB: 0, etNumberPaddingLR: 2,
      etNumberBackground: "white", etNumberBorderSize: 0,
      etNumberBorderRadius: 5, etNumberBorderColor: "white",
      etNumberShadow: "inset 0px 0px 10px 0px transparent"
    });
  });
//     gallery
$(document).ready(function(){
    var main_img = $('#gallery').attr('src', );
       $('.gallery-img').click(function(){
       main_img = $(this).attr('src',); 
       $('#gallery').attr('src', main_img )
       });
});