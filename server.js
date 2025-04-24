const express = require("express");

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});


function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

app.get('/quote', (req, res) => {
  const randomQuote = getRandomElement(quotes);
  res.send(randomQuote);
});