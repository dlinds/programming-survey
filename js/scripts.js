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
  $("select#cutest-puppy-name").val("");
  
}

function processAboutYou () {
  //
  // this function will determine a 
  // all inputs and selects are set to blank
  //
}

$(document).ready(function () {
  $("form#answers").submit(function (event) {
    event.preventDefault();

    const userName = $("input#user-name").val();
    const emailAddress = $("input#email").val();
    const leisureActivity = $("select#leisure-activity").val();
    const userIndustry = $("select#user-industry").val();
    const chickenOrEgg = $("select#chicken-or-egg").val();
    const languageFormatting = $("select#language-formatting").val();
    const langAge = $("select#language-age").val();
    const cutestPuppyName = $("select#cutest-puppy-name").val();

    let languageResult;
    let languageReasoning;

    $("#form-questions").hide(); // when [spin] is pushed, hide form
    $("#form-results").toggle(); // and then show results div

    //console.log(userName + " " + emailAddress + " " + leisureActivity + " " + userIndustry);

    if (chickenOrEgg === "Chicken") {
      if (cutestPuppyName === "Spot" && userIndustry === "Finance") {
        if (leisureActivity === "Work") {
          languageResult = "Fortran";
          languageReasoning = "because you couldn't be more boring!"
        } else { //anything for leisure but work, when chicken, spot, finance selected
            if (langAge === "Elderly" && languageFormatting === "Precise") {
              languageResult = "Fortran";
              languageReasoning = "because you like old and precise languages!"
            } else if (langAge === "Brand New" && languageFormatting === "Precise") { //chicken, spot, finance, != work, brand new, precise
                languageResult = "PowerShell";
                languageReasoning = "because you work in finance, work isn't leisure (so you automate to work less), and you like new and precise languages!"
              }
        }
      } else if (cutestPuppyName === "Spot" && userIndustry !== "Finance") {
        
      }
    } else if (chickenOrEgg === "Egg") {

      } else {
        alert("The most important question of all - chicken or egg was not answered. Try again");
      }
    
    $("#language-suggestion-name").text(languageResult);
    $("#language-suggestion-reason").text(languageReasoning);



  });

  // when show me languages button is pressed, show languages div
  $("#show-lang-button").click(function () {
    $("#rules-language-options").show();
    $("#show-lang-button").hide();
    $("#hide-lang-button").text("Hide these!");
  });

  // when hide these button is pressed, hide languages and re-show Show Me button
  $("#hide-lang-button").click(function () {
    $("#show-lang-button").show();
    $("#rules-language-options").hide();
    $("#hide-lang-button").text("No thanks!");
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