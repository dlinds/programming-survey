$(document).ready(function () {
  $("form#answers").submit(function (event) {
    event.preventDefault();

    

  });

  $("input#email").click(function () {
    $("input#email").val("");
  });
});