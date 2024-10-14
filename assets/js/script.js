const generate = document.querySelector(".generate");

generate.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * 6);

  fetch("../assets/js/data.json")
    .then((response) => response.json())
    .then((data) => changeVerse(data));
});

const verseHeader = document.querySelector(".header__wrapper .title span");
const verseText = document.querySelector(".card__text p");
const verseTopic = document.querySelector(".topic");

const changeVerse = (data) => {
  // Generate Random Digits
  let randomIndex = Math.floor(Math.random() * 9),
    randomIndexVerse = Math.floor(Math.random() * 5);

  console.log(data.BibleVerses);

  verseHeader.textContent =
    data.BibleVerses[randomIndex].verses[randomIndexVerse].reference;
  verseText.textContent =
    data.BibleVerses[randomIndex].verses[randomIndexVerse].text;
  verseTopic.textContent = data.BibleVerses[randomIndex].topic;
};
