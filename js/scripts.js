$(document).ready(function () {
  $("form#answers").submit(function (event) {
    event.preventDefault();

    $("#form-questions").hide();

    


    $("#form-results").toggle();
    

  });

  $("input#email").click(function () {
    $("input#email").val("");
  });

  $("#spin-again-button").click(function () {
    $("#form-questions").show();
    $("#form-results").toggle();
  });

});