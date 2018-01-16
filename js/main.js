jQuery('.menulink').click(function(){
  jQuery('.menulink').removeClass('active');
  jQuery(this).addClass('active');
});
$('#contact').click(function() {
    $('#contact').addClass('active');
});
function linkActive()
{
    document.getElementById('link').setAttribute("class", "menulink active");
}