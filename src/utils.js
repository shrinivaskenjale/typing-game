const words = [
  "sigh",
  "tense",
  "airplane",
  "ball",
  "pies",
  "juice",
  "warlike",
  "bad",
  "north",
  "dependent",
  "steer",
  "silver",
  "highfalutin",
  "superficial",
  "quince",
  "eight",
  "feeble",
  "admit",
  "drag",
  "loving",
];

export function getRandomWord() {
  const randomIndex = getRndInteger(0, words.length);
  return words[randomIndex];
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
