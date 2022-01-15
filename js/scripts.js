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
  $("#language-suggestion-name").val("");
  $("#language-suggestion-reason").val("");
  $("#language-more-info").val("");
  $("#puppy-row").hide();
  $("#puppy-img").attr("src", "");
}

function getInfoOnLanguage (languageName) {
  switch (languageName) {
    case "Fortran": 
        return "Fortran was originally developed by IBM in the 1950s for scientific and engineering applications, and subsequently came to dominate scientific computing. It has been in use for over six decades in computationally intensive areas such as numerical weather prediction, finite element analysis, computational fluid dynamics, geophysics, computational physics, crystallography and computational chemistry. It is a popular language for high-performance computing and is used for programs that benchmark and rank the world's fastest supercomputers.";
    case "C++": 
        return "C++ is a general-purpose programming language created by Bjarne Stroustrup as an extension of the C programming language, or \"C with Classes\". The language has expanded significantly over time, and modern C++ now has object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation. It is almost always implemented as a compiled language, and many vendors provide C++ compilers, including the Free Software Foundation, LLVM, Microsoft, Intel, Oracle, and IBM, so it is available on many platforms.";
    case "C#":
        return "C# is a general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.\n\nC# was designed by Anders Hejlsberg from Microsoft in 2000 and was later approved as an international standard by Ecma (ECMA-334) in 2002 and ISO (ISO/IEC 23270) in 2003. Microsoft introduced C# along with .NET Framework and Visual Studio, both of which were closed-source. At the time, Microsoft had no open-source products. Four years later, in 2004, a free and open-source project called Mono began, providing a cross-platform compiler and runtime environment for the C# programming language. A decade later, Microsoft released Visual Studio Code (code editor), Roslyn (compiler), and the unified .NET platform (software framework), all of which support C# and are free, open-source, and cross-platform. Mono also joined Microsoft but was not merged into .NET.";
    case "PowerShell":
      return "PowerShell or Microsoft PowerShell (formerly Windows PowerShell) is a task automation and configuration management program from Microsoft, consisting of a command-line shell and the associated scripting language. Initially a Windows component only, known as Windows PowerShell, it was made open-source and cross-platform on 18 August 2016 with the introduction of PowerShell Core. The former is built on the .NET Framework, the latter on .NET Core. The name Windows PowerShell is still present on the latest versions of Windows 11 and 10, but the latest versions of PowerShell is called PowerShell or Microsoft PowerShell.";
    case "Python":
      return "Python is an interpreted high-level general-purpose programming language. Its design philosophy emphasizes code readability with its use of significant indentation. Its language constructs as well as its object-oriented approach aim to help programmers write clear, logical code for small and large-scale projects. Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly, procedural), object-oriented and functional programming. It is often described as a \"batteries included\" language due to its comprehensive standard library.";
    case "Javascript":
      return "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices. JavaScript is a high-level, often just-in-time compiled language that conforms to the ECMAScript standard. It has dynamic typing, prototype-based object-orientation, and first-class functions. It is multi-paradigm, supporting event-driven, functional, and imperative programming styles. It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM).";
    default:
      return '';
  }
}

function returnPuppy (puppyName) {
  if (puppyName === "Spot") {
    return "https://dogfoodsmart.com/wp-content/uploads/2020/12/How_Much_To_Feed_A_Beagle-810x442.jpg";
  } else if (puppyName === "Doggy Dogerton") {
    return "https://www.akc.org/wp-content/uploads/2017/01/australian-shepherd-puppy.jpeg";
  } else {
    return "";
  }

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

    if (chickenOrEgg === "Chicken") {
      if (userIndustry === "Finance") {
        if (leisureActivity === "Work") {
          languageResult = "Fortran";
          languageReasoning = "We think you would get along famously with Fortran! You work in finance and selected \"work\" as a leisure activity?! Fortran is crazy old so it will be perfect for you since it will be a lot of work to understand it!";
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
            languageResult = "No language for you!";
            languageReasoning = "C'mon, you have to select more than just Chicken. Please hit SPIN AGAIN and try once more.";
      }
    } else if (chickenOrEgg === "Egg") {
      languageResult = "All six languages!";
      languageReasoning = "By selecting egg, you have shown a higher level of intelligence than most, so all languages will come naturally and easily to you (we even discarded all your other answers, as we are so sure on this one!). The egg was first, as the predecessor to the chicken laid the egg that would become the first chicken once the egg hatched.";
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
    $("#language-more-info").text(getInfoOnLanguage(languageResult));

    if (cutestPuppyName) {
      $("#puppy-img").attr("src", returnPuppy(cutestPuppyName));
      console.log(returnPuppy(cutestPuppyName));
      $("#puppy-row").show();
    } else {
      $("#puppy-row").hide();
      $("#puppy-img").attr("src", "");
    }
  });

  // when show me languages button is pressed, show languages div
  $("#show-lang-button").click(function () {
    $("#rules-language-options").show();
    $("#show-lang-button").prop("disabled",true);
    $("#hide-lang-button").text("Hide these!");
  });

  // when hide these button is pressed, hide languages and re-show Show Me button
  $("#hide-lang-button").click(function () {
    $("#show-lang-button").prop("disabled",false);
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