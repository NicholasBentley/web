$(function() {
  var curPage="descr1";
  $("#menu a").click(function() {
      if (curPage.length) { 
          $("#"+curPage).hide();
      }
      curPage=$(this).data("descr");
      $("#"+curPage).show();
  });
});

$(function () {
  var menuLink="link1";
  $("#menu a").click(function() {
    if (menuLink.length) {
      $("#"+menuLink).removeClass("active");
    }
    menuLink=$(this).data("link");
    $("#"+menuLink).addClass("active");
  });
});

$.urlParam = function(name){
  var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
  if (results==null) {
     return null;
  }
  return decodeURI(results[1]) || 0;
}