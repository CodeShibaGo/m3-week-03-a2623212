$(document).ready(function () {
  $("li.q").click(function (e) {
    e.preventDefault();

    // control the rotate
    const img = $(this).children("img");
    $("img").not(img).removeClass("rotate");
    img.toggleClass("rotate");

    $(this).next().slideToggle("slow").siblings("li.a").slideUp();
  });
});
