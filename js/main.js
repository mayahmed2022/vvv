function randomQuotes() {
  var textOfQuotes = [
    "“Be yourself; everyone else is already taken.”   ― Oscar Wilde   ",

    " “So many books, so little time.”     ― Frank Zappa",
    "“You only live once, but if you do it right, once is enough.”    ― Mae West",
    "“Be the change that you wish to see in the world.”     ― Mahatma Gandhi",
    "“A friend is someone who knows all about you and still loves you.    ― Elbert Hubbard",
    "“To live is the rarest thing in the world. Most people exist, that is all.”    ― Oscar Wilde",
    "“Always forgive your enemies; nothing annoys them so much.”    ― Oscar Wilde",
    "“Without music, life would be a mistake.”",
    "“We accept the love we think we deserve.”",
  ];
  var author = [
    " Oscar Wilde",
    "Marilyn Monroe",
    "Albert Einstein",
    "Frank Zappa",
    "Marcus Tullius Cicero",
    "Marcus Tullius Cicero",
    "Marcus Tullius Cicero",
  ];
  var num = Math.floor(Math.random() * textOfQuotes.length);

  document.getElementById("text").innerHTML = textOfQuotes[num];

  // document.getElementById("text").innerHTML = author[num];
}
