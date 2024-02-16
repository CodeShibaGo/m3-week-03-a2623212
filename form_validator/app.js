$(document).ready(function () {
  $("#form").submit(function (e) {
    e.preventDefault();

    const username = $("#username").val().trim();
    const email = $("#email").val().trim();
    const password = $("#password").val().trim();
    const password2 = $("#password2").val().trim();

    //Username
    if (username.length < 3) {
      $("#username")
        .parent()
        .removeClass("success")
        .removeClass("success")
        .addClass("error");
      $("#username")
        .parent()
        .find("small")
        .text("Username must be at least 3 characters");
    } else {
      $("#username")
        .parent()
        .removeClass("error")
        .addClass("success");
    }
    //Email
    const validEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (validEmail.test(email)) {
      $("#email").parent().removeClass("error").addClass("success");
    } else {
      $("#email").parent().removeClass("success").addClass("error");
      $("#email").parent().find("small").text("Email is not valid");
    }

    //Passwords
    if (password.length < 6) {
      $("#password")
        .parent()
        .removeClass("success")
        .addClass("error");
      $("#password")
        .parent()
        .find("small")
        .text("Passwords must be at least 6 characters");
    } else {
      $("#password")
        .parent()
        .removeClass("error")
        .addClass("success");
    }

    //Passwords
    if (!password2) {
      $("#password2")
        .parent()
        .removeClass("success")
        .addClass("error");
      $("#password2")
        .parent()
        .find("small")
        .text("Password2 is required");
    } else if (password2 !== password) {
      $("#password2")
        .parent()
        .removeClass("success")
        .addClass("error");
      $("#password2")
        .parent()
        .find("small")
        .text("Passwords do not match");
    } else {
      $("#password2")
        .parent()
        .removeClass("error")
        .addClass("success");
    }
  });
});
