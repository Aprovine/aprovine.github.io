var c = 0;

var when = ["stay up late to text me", "message me first", "send me posts on Instagram", "tell me puns or jokes", "tolerate me calling you a blobfish", "tell me about your high school shows", "play music in the car", "drive me around", "watch movies with me", "go to the arcade with me", "lose to me in chess", "talk to me about excel", "tell me you appreciate me", "work hard", "tell me what you're passionate about", "tell me about Vermont", "help me plan out dates", "share your preferences", "share your profound discoveries", "go along with my bets", "wish me goodnight", "share your insecurities with me", "sent me the voice recording in german", "reassure me", "tell me about your day", "share songs with me", "tell me about your dreams", "sit with me in silence", "hold my hand", "are there when I need you", "get me gifts", "are honest", "explain things to me", "go along wiht my jokes", "share pictures of your everyday activities", "tolerate me when I laugh at you", "bully me", "laugh", "noticed when i called you my boyfriend for the first time", "are serious when I can't be", "hold me accountable",  "tell me about yourself", "take what I say into account", "work hard", "want to know more about me", "race bikes", "are competitive", "play guitar hero", "make decisions when I'm indecisive", "go along with my whims", "tell me about your interests", "are patient with me", "accept who I am even with my flaws", "write me letters", "tell your family about me", "spend time with me", "tell me you miss me", "make future plans with me", "tell me about your friends", "are proud of yourself", "push yourself", "are unapologetically yourself", "say how much I mean to you", "listen to my insecurities and reassure me", "ask me out", "invite me over", "tell me what you believe in, including me", "show me your camera roll", "tell me about your cats", "adjust your hair", "tell me about the anime you watch", "explain movies to me", "tell me my worth", "understand your own worth", "are confident", "twitch your leg", "act childish", "tell me your complaints", "succeed", "have new ideas", "share the embarrassing things", "say the cringe shit", "do stuff with the friend group", "try the weird food I make", "make fun of the things I do", "use funny words like quirky", "think about me and tell me when you do", "are happy", "want to share your happiness with me", "are possessive", "tell me about your love of maple syrup", "show me pictures of you as a kid", "tell me about your favorite memories and least favorite ones as well", "hold me in your arms", "put your head against mine", "are sometimes completely clueless", "speak in different languages", "try new things", "succeed", "share your current projects and goals", "are the first messages I check in the morning", "make me fee worthwhile", "go on tangents", "explain things to me", "twitch your leg", "notice when I copy you", "make me beleive I'm a good influence too", "know a lot about a subject and let that knowledge show", "are kind", "push me to be better", "help me", "let me help you", "are proud of me", "give me your approval", "always know what to say and admit when you don't", "are realistic"]


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
