const quotes = [
  {
    text: "I am so clever that sometimes I don't understand a single word of what I am saying.",
    quotee: "Oscar Wilde",
  },
  {
    text: "I'm not superstitious, but I am a little stitious.",
    quotee: "Michael Scott",
  },
  {
    text: "Behind every great man is a woman rolling her eyes.",
    quotee: "Jim Carrey",
  },
  {
    text: "My fake plants died because I did not pretend to water them.",
    quotee: "Mitch Hedberg",
  },
  {
    text: "I used to think I was indecisive, but now I'm not too sure.",
    quotee: "Unknown",
  },
  {
    text: "I want my children to have all the things I couldn't afford. Then I want to move in with them.",
    quotee: "Phyllis Diller",
  },
  {
    text: "I love deadlines. I love the whooshing noise they make as they go by.",
    quotee: "Douglas Adams",
  },
  {
    text: "If you think nobody cares if you're alive, try missing a couple of car payments.",
    quotee: "Earl Wilson",
  },
  {
    text: "A day without sunshine is like, you know, night.",
    quotee: "Steve Martin",
  },
  {
    text: "I haven't spoken to my wife in years. I didn't want to interrupt her.",
    quotee: "Rodney Dangerfield",
  },
  {
    text: "Why do they call it rush hour when nothing moves?",
    quotee: "Robin Williams",
  },
  {
    text: "People say nothing is impossible, but I do nothing every day.",
    quotee: "A.A. Milne (Winnie the Pooh)",
  },
  {
    text: "If at first you don't succeed, then skydiving definitely isn't for you.",
    quotee: "Steven Wright",
  },
  {
    text: "All generalizations are false, including this one.",
    quotee: "Mark Twain",
  },
  {
    text: "I used to sell furniture for a living. The trouble was, it was my own.",
    quotee: "Les Dawson",
  },
  {
    text: "A clear conscience is usually the sign of a bad memory.",
    quotee: "Steven Wright",
  },
  {
    text: "Life is short. Smile while you still have teeth.",
    quotee: "Unknown",
  },
  {
    text: "I always wanted to be somebody, but now I realize I should have been more specific.",
    quotee: "Lily Tomlin",
  },
  { text: "I am not lazy. I am on energy-saving mode.", quotee: "Unknown" },
  {
    text: "I told my computer I needed a break, and now it won’t stop sending me beach wallpapers.",
    quotee: "Unknown",
  },
];

const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.post("/add-quote", (req, res) => {
  const text = req.body.quote;
  const quotee = req.body.author;

  if (text && quotee) {
    const newQuote = { text, quotee };
    quotes.push(newQuote);
    res.send(newQuote);
  } else {
    res.sendStatus(400);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
