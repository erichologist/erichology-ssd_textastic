$(document).ready(function() {
  
/*  ANIMATION COLORS  */
  $("div[class*=primary], .color__btn-1, .color__btn-1>i").on("click", function(e) {
    e.preventDefault;
    // move just if click the background
    if (event.target !== this)
    return;
    $("div[class*=primary], .color__btn-1").toggleClass("move");
    
    $(".color__box-2").toggleClass("move");
  });
  
  $("div[class*=secondary], .color__btn-2, .color__btn-2>i").on("click", function() {
    
    // move just if click the background
    if (event.target !== this)
    return;
    $("div[class*=secondary], .color__btn-2").toggleClass("move");
  });

/*  COPY TO CLIPBOARD  */

// click the icon
$("[id^=copy-]").on("click", function(e) {
  e.preventDefault;
  
  
  // find the id number of the parent
  let num = $(this).parent().attr("id").slice("color-".length);
  let elem = $(".color-" + num);
  
  // copy the text of the background color
  let $temp = $("<input>");
  $("body").append($temp);
  $temp.val(elem.children(":first").text()).select();
  document.execCommand("copy");
  $temp.remove();
  
  $(this).children(".tooltip").addClass("appear").delay(1000).queue(function( next ){
    $(this).removeClass("appear"); 
    $(this).dequeue();
  });
});

});




