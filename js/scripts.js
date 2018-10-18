// var checkAge = function(age) {
//   if(age >= 18) {
//     return true;
//   }
//   else {
//     return false;
//   }
// };

$(document).ready(function() {
  $("form#age").submit(function(event) {
    event.preventDefault();
    var numAge = parseInt($("#getAge").val());
    if(numAge >= 18) {
      $("#over-18").show();
      $("#age-query").hide();
    } else {
      $("#under-18").show();
      $("age-query").hide();
    }
  });
});
