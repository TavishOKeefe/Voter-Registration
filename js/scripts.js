$(document).ready(function() {
  $("form#age").submit(function(event) {
    event.preventDefault();
    var numAge = parseInt($("#getAge").val());
    if (numAge >= 18) {
      $("#over-18").show();
      $("#age-query").hide();
      $("#invalid").hide();
    } else if (numAge < 18) {
      $("#under-18").show();
      $("#age-query").hide();
      $("#invalid").hide();
    }
    else {
      $("#invalid").show();
    }
  });
});
