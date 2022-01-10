var c = 0;

var when = ["tell me about your airport expeditions", "listen to my pokemon classification rationale", "reread these messages and literally memorize the contents becuase my words mean that much to you", "stay up late to text me", "message me first", "send me posts on Instagram", "tell me puns or jokes", "tolerate me calling you a blobfish", "tell me about your high school shows", "play music in the car", "drive me around", "watch movies with me", "go to the arcade with me", "lose to me in chess", "talk to me about excel", "tell me you appreciate me", "work hard", "tell me what you're passionate about", "tell me about Vermont", "help me plan out dates", "share your preferences", "share your profound discoveries", "go along with my bets", "wish me goodnight", "share your insecurities with me", "sent me the voice recording in german", "reassure me", "tell me about your day", "share songs with me", "tell me about your dreams", "sit with me in silence", "hold my hand", "are there when I need you", "get me gifts", "are honest", "explain things to me", "go along with my jokes", "share pictures of your everyday activities", "tolerate me when I laugh at you", "bully me", "use vocab words that are new to me", "noticed when i called you my boyfriend for the first time", "are serious when I can't be", "hold me accountable",  "tell me about yourself", "take what I say into account", "want to know more about me", "race bikes", "are competitive", "play guitar hero", "make decisions when I'm indecisive", "go along with my whims", "tell me about your interests", "are patient with me", "accept who I am even with my flaws", "write me letters", "tell your family about me", "spend time with me", "tell me you miss me", "make future plans with me", "tell me about your friends", "are proud of yourself", "push yourself", "are unapologetically yourself", "say how much I mean to you", "listen to my insecurities and reassure me", "ask me out", "invite me over", "tell me what you believe in, including me", "show me your camera roll", "tell me about your cats", "adjust your hair", "tell me about the anime you watch", "explain foreign concepts (and maybe not so foreign ones as well) to me", "tell me my worth", "understand your own worth", "are confident", "act childish", "tell me your complaints", "have new ideas", "share the embarrassing things", "say the cringe shit", "do stuff with the friend group", "try the weird food I make", "make fun of the things I do", "use funny words like quirky", "think about me and tell me when you do", "are happy", "want to share your happiness with me", "are possessive", "tell me about your love of maple syrup", "show me pictures of you as a kid", "tell me about your favorite memories and least favorite ones as well", "hold me in your arms", "put your head against mine", "are sometimes completely clueless", "speak in different languages", "try new things", "succeed", "share your current projects and goals", "are the first messages I check in the morning", "make me feel worthwhile", "go on tangents", "explain things to me", "twitch your leg", "notice when I copy you", "make me believe I'm a good influence too", "know a lot about a subject and let that knowledge show", "are kind", "push me to be better", "help me", "let me help you", "are proud of me", "give me your approval", "always know what to say and admit when you don't", "are realistic", "help me pick my outfits", "want to share my interests", "share your interests with me", "talk about Valorant and your successes and failures", "admit your faults", "laugh", "say your one liners during movies", "tell dumb stories about your furniture", "firmly tell me ghosts aren't real", "ask me hypotheticals", "let me paint your nails", "want to make me jealous becuase I know you just want me to care about you more", "trust me", "want me to be happy", "notice my discomfort and don't push me", "remember important things", "make fun of my typos", "wish me Merry Christmas", "wish me Happy New Year", "tell me you think about me", "talk to me when I bleach my hair", "keep up with jokes and keep up the bits", "save things in the chat that I cant bring myself to, becuase I go back and reread them", "tell me what you want and are straightforward about it", "are cautious about your actions", "want my approval", "come up with cute ideas", "are so thoughful", "reply to my tiktok links even if they don't amuse you", "motivate yourself", "are weak around me", "are open and don't get mad at me when I force things out of you", "listen to the dumb things I do and don't judge", "make hours fly by through just messaging me", "send me pictures of your outings", "tell me about your day and always finding a course of conversation", "are so interesting just by being yourself", "let me lay on you", "let me enjoy the comfort of doing nothing with you", "respect my dislike for bowling", "put up with hypothetical of me having an onlyfans simply because you would love to support me if it makes me money and im successful", "have your own superstitions like your gut feeling for fantasy football", "are practical about things", "call me wonderful", "are flexible with your schedule to accomodate for others", "put forth effort into the relationship to make sure we work", "want to talk about me to others", "got new shampoo because I kept complaining about 3in1", "will do things you dislike becuase you know how happy it makes me", "kiss me", "are sober just as much as when you are drunk", "win against me in air hockey", "share fun facts with me", "accidentally retell me stories", "share your feelings", "work through problems (either yours or mine) and resolve them", "have the strength to admit what's bothering you", "acknowledge your problems and have the strength to face them", "draw me pictures even if they kinda suck", "call me spending time with you YOUR time", "got me this bracelet, becuase now it makes it easier for me to think about you", "give me advice even if we regurgitate the same stuff back and forth", "support me", "tell me nice messages because you're right, they do make me feel good", "workout and tell me about it or show me videos as proof", "keep the random things I give you, like the chestnut or the deformed  plushie", "can follow my thought process because im pretty confusing at times", "were the first person I could fully trust", "are nervous around me becuase it shows how much you care", "randomly think of things and then send them out of context to me"]


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
