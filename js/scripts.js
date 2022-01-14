function resetForm() {
  //
  // when called, this function will reset the form
  // all inputs and selects are set to blank
  //

  $("input#user-name").val("");
  $("input#email").val("myemail@gmail.com");
  $("select#leisure-activity").val("");
  $("select#user-industry").val("");
  $("select#chicken-or-egg").val("");
  $("select#language-formatting").val("");
  $("select#language-age").val("");
  $("select#cutest-puppy").val("");
  
}

$(document).ready(function () {
  $("form#answers").submit(function (event) {
    event.preventDefault();

    $("#form-questions").hide(); // when [spin] is pushed, hide form
    $("#form-results").toggle(); // and then show results div
    
  });

  // when email text box is clicked and myemail@gmail is still there, blank out
  $("input#email").click(function () {
    if ($("input#email").val() === "myemail@gmail.com") {
      $("input#email").val("");
    }
  });

  // when [spin again] is clicked, toggle div displays and reset the form
  $("#spin-again-button").click(function () {
    $("#form-questions").show();
    $("#form-results").toggle();
    resetForm();
  });

});