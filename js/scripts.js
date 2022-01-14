function resetForm() {
  //
  // when called, this function will reset the form
  // all inputs and selects are set to blank
  //

  $("input#user-name").val("");
  $("input#email").val("myemail@gmail.com");
  $("select#chicken-or-egg").val("");
  $("select#leisure-activity").val("");
  $("select#user-industry").val("");
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
    const chickenOrEgg = $("select#chicken-or-egg").val();
    const leisureActivity = $("select#leisure-activity").val();
    const userIndustry = $("select#user-industry").val();
    const languageFormatting = $("select#language-formatting").val();
    const langAge = $("select#language-age").val();
    const cutestPuppyName = $("select#cutest-puppy-name").val();

    let languageResult;
    let languageReasoning;

    $("#form-questions").hide(); // when [spin] is pushed, hide form
    $("#form-results").toggle(); // and then show results div

    //console.log(userName + " " + emailAddress + " " + leisureActivity + " " + userIndustry);

    if (chickenOrEgg === "Chicken") {
      if (userIndustry === "Finance") {
        if (leisureActivity === "Work") {
          languageResult = "Fortran";
          languageReasoning = "because you couldn't be more boring! Really, \"work\" as your leisure activity?!"
        } else { //anything for leisure but work, when chicken and finance selected
            if (langAge === "Elderly" && languageFormatting === "Precise") {
              languageResult = "Fortran";
              languageReasoning = "because you work in finance and like either old or precise languages!"
            } else if (langAge === "Brand New" && languageFormatting === "Precise") { //chicken, finance, != work, brand new, precise
                languageResult = "PowerShell";
                languageReasoning = "because you work in finance, work isn't leisure (so you automate to work less), and you like new and precise languages!"
              } else if (langAge === "Brand New" && languageFormatting === "Wild West") { //chicken, finance, != work, brand new, precise
                languageResult = "Python";
                languageReasoning = "because you work in finance, work isn't leisure (so you automate to work less), and you like new languages, but you also don't care about preciseness!"
                } else if (langAge === "Middle Aged" && languageFormatting === "Precise") {
                  languageResult = "C#";
                  languageReasoning = "because you work in finance and like middle aged languages, but still want a precise language!"
                } else if (langAge === "Middle Aged" && languageFormatting === "Wild West") {
                    languageResult = "C++";
                    languageReasoning = "because you work in finance, want something a little older, but like some loosey goosey formatting!"
                  } else if (languageFormatting === "Wild West") {
                      languageResult = "Javascript!";
                      languageReasoning = "We think you'd be a great fit for Javascript as you don't care about age and prefer a little loosey goosey in your formatting."
                    } else {
                      languageResult = "Darn! No matches";
                      languageReasoning = "We couldn't seem to find a great match for you. Can you give us a little more information about yourself and re-spin?"
                    }
        }
      } else if (userIndustry === "Tech") {
        switch (langAge) {
          case "Elderly": 
                    languageResult = "Fortran";
                    languageReasoning = "Because you work in tech, and want a language older than the personal computer"
                    break;
          case "Middle Aged":
                    languageResult = "C++";
                    languageReasoning = "because you work in tech, but want something a bit more middle aged"
                    break;
          case "Brand New":
                    languageResult = "PowerShell";
                    languageReasoning = "because you work in tech, but want something from this century. PowerShell should allow you to automate many functions of your job!"
                    break;         
          default:
                    languageResult = "Javascript";
                    languageReasoning = "because you work in tech, but don't care about age. Javascript is applicable to all other survey answers."
                    break; 
        }
        
      }
    } else if (chickenOrEgg === "Egg") {

      } else { //if chicken or egg isn't answered, then no results other than alert
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