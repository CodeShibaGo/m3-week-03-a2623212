$(document).ready(function () {
  $("button").click(function (e) {
    e.preventDefault();
    const username = $("#username").val().trim();
    const email = $("#email").val().trim();
    const password = $("#password").val().trim();
    const password2 = $("#password2").val().trim();
    // Username
    if (username.length < 3) {
      $("#username").parent().addClass("error");
      $("#username")
        .parent()
        .find("small")
        .text("Username must be at least 3 characters");
    } else {
      $("#username").parent().addClass("success");
    }
    //Email
  });
});
