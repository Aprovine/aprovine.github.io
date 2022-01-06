var c = 0;

var when = ["shut up"]


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

// shuffle on start
$(function () {
  shuffle(when);
});


$(document).click(function (e) {
  // Check for left button
  if (e.button == 0) {

    //    console.log(c + ": " + when[c]);

    $("<p>" + when[c] + "</p>").hide().prependTo("#when-you").fadeIn(2000);

    c++;

    if (c == when.length) {

      $("<p>love me too </p>").hide().prependTo("#when-you").fadeIn(2000);

      $("body").css('background', '#000');
      $("#g p").css('color', '#fff');

      $(document).unbind("click");

    }

  }
});
