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

    let languageResult = '';
    let languageReasoning = '';

    $("#form-questions").hide(); // when [spin] is pushed, hide form
    $("#form-results").toggle(); // and then show results div

    //console.log(userName + " " + emailAddress + " " + leisureActivity + " " + userIndustry);

    if (chickenOrEgg === "Chicken") {
      if (userIndustry === "Finance") {
        if (leisureActivity === "Work") {
          languageResult = "Fortran";
          languageReasoning = "because you couldn't be more boring! Really, \"work\" as your leisure activity?!";
        } else { //anything for leisure but work, when chicken and finance selected
            if (langAge === "Elderly" && languageFormatting === "Precise") {
              languageResult = "Fortran";
              languageReasoning = "because you work in finance and like either old or precise languages!";
            } else if (langAge === "Brand New" && languageFormatting === "Precise") { //chicken, finance, != work, brand new, precise
                languageResult = "PowerShell";
                languageReasoning = "because you work in finance, work isn't leisure (so you automate to work less), and you like new and precise languages!";
              } else if (langAge === "Brand New" && languageFormatting === "Wild West") { //chicken, finance, != work, brand new, precise
                languageResult = "Python";
                languageReasoning = "because you work in finance, work isn't leisure (so you automate to work less), and you like new languages, but you also don't care about preciseness!";
                } else if (langAge === "Middle Aged" && languageFormatting === "Precise") {
                  languageResult = "C#";
                  languageReasoning = "because you work in finance and like middle aged languages, but still want a precise language!";
                } else if (langAge === "Middle Aged" && languageFormatting === "Wild West") {
                    languageResult = "C++";
                    languageReasoning = "because you work in finance, want something a little older, but like some loosey goosey formatting!";
                  } else if (languageFormatting === "Wild West") {
                      languageResult = "Javascript!";
                      languageReasoning = "We think you'd be a great fit for Javascript as you don't care about age and prefer a little loosey goosey in your formatting.";
                    } else {
                      languageResult = "Darn! No matches";
                      languageReasoning = "We couldn't seem to find a great match for you. Can you give us a little more information about yourself and re-spin?";
                    }
        } //end finance industry branch
      } else if (userIndustry === "Tech") {
        switch (langAge) {
          case "Elderly": 
                    languageResult = "Fortran";
                    languageReasoning = "Because you work in tech, and want a language older than the personal computer";
                    break;
          case "Middle Aged":
                    languageResult = "C++";
                    languageReasoning = "because you work in tech, but want something a bit more middle aged";
                    break;
          case "Brand New":
                    languageResult = "PowerShell";
                    languageReasoning = "because you work in tech, but want something from this century. PowerShell should allow you to automate many functions of your job!";
                    break;         
          default:
                    if (!leisureActivity && !languageFormatting) {
                      languageResult = "Python";
                      languageReasoning = "because you work in tech and don't have an age preference. You also don't seem to even have a leisure activity or a formatting preference.";
                      break; 
                    } else if (!languageFormatting) {
                        languageResult = "Javascript";
                        languageReasoning = "because you work in tech, enjoy a leisure, but don't care about formatting.";
                        break; 
                    }   else if (!leisureActivity) {
                          languageResult = "Javascript";
                          languageReasoning = "because you work in tech, have a preference on formatting, but don't care about leisure.";
                          break; 
                     } else {
                          languageResult = "C#";
                          languageReasoning = "because you work in tech and don't care about age, but have a leisure and a formatting preference! C# will allow you to create applications for MS Windows!";
                          break; 
                      }
        } //end switch        
      } else if (userIndustry === "Science") {
        languageResult = "Fortran";
        languageReasoning = "Fortran is perfect for anyone in science as it's a general-purpose, compiled imperative programming language that is especially suited to numeric computation and scientific computing. We don't even care about your other answers!";                  
      } else if (userIndustry === "Media") {
          switch (leisureActivity) {
            case "Make Music": 
                  languageResult = "C++";
                  languageReasoning = "Because you work in media and you like making music. Did you know that most audio plugins are made utilizing C++? There is even a library called Juce that can help jumpstart your journey!";
                  break; 
            case "Video Games" :
                  languageResult = "C++";
                  languageReasoning = "You work in media and enjoy gaming! Unreal Engine is one of the standards for making video games. Unreal Engine happens to be build on top of C++!";
                  break; 
            case "Exercise" :
                  languageResult = "PowerShell";
                  languageReasoning = "You work in media and enjoy a bit of exercise, so PowerShell will be great for you as the method names are quite long - similar to the runs you are probably taking.";
                  break;  
            default:
                  if (languageFormatting === "Precise") {
                    languageResult = "C++";
                    languageReasoning = "A lot of applications in media are written with C++! It's also a very precise language, so you should love it!";
                  } else if (languageFormatting === "Wild West") {
                    languageResult = "Javascript";
                    languageReasoning = "If you work in media, and formatting consistency doesn't bother you, you will love Javascript! Never worry about missing a semi-colon or declaring a global variable again!";
                  } else {
                    languageResult = "C++";
                    languageReasoning = "You work in media but don't seem to have a preference in language formatting. Even if you don't make music, play video games, or exercise, C++ will still be a great option for you as it's one of the most versatile languages out there. Did you know that even Microsoft Windows utilizes C++ for some of its source code?";
                  }
                  break;  
          }
        } else { // if chicken is selected, but no industry is selected
            languageResult = "";
            languageReasoning = "";
      }
    } else if (chickenOrEgg === "Egg") {
      languageResult = "All six languages!";
      languageReasoning = "By selecting egg, you have shown a higher level of intelligence than most, so all languages will come naturally and easily to you (we even discarded all your other answers, as we were so sure on this one!). The egg was first, as the predecessor to the chicken laid the egg that would become the first chicken once the egg hatched.";
      } else { //if chicken or egg isn't answered, then no results
        languageResult = "No recommendation.";
        languageReasoning = "The most important question of all - chicken or egg - was not answered. Try again";
      }
    
    $("#language-suggestion-name").text(languageResult);
    if (languageResult === "C++") {
      $("#language-suggestion-img").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png");
    } else if (languageResult === "Fortran") {
        $("#language-suggestion-img").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Fortran_logo.svg/1200px-Fortran_logo.svg.png");
      }
        else if (languageResult === "C#") {
          $("#language-suggestion-img").attr("src", "https://pluralsight.imgix.net/paths/path-icons/csharp-e7b8fcd4ce.png");
        }
          else if (languageResult === "Python") {
            $("#language-suggestion-img").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png");
          }
            else if (languageResult === "PowerShell") {
              $("#language-suggestion-img").attr("src", "https://www.saotn.org/wp-content/uploads/2016/08/PowerShell_5.0_logo.png");
            }
              else if (languageResult === "Javascript") {
                $("#language-suggestion-img").attr("src", "https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png");
              } 
                else {
                  $("#language-suggestion-img").attr("src", ""); //set to no photo if no match is found
                }


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