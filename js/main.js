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

function getUrlVars() {
  var vars = {};
  var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
      vars[key] = value;
  });
  return vars;
}
function getUrlParam(parameter, defaultvalue){
  var urlparameter = defaultvalue;
  if(window.location.href.indexOf(parameter) > -1){
      urlparameter = getUrlVars()[parameter];
      }
  return urlparameter;
}

var calInviteeName = getUrlParam('invitee_first_name','for scheduling');
var calInviteeEmail = getUrlParam('invitee_email','the email address you provided');
var calInviteeDate = decodeURIComponent(getUrlParam('event_start_time'));