const generate = document.querySelector(".generate");

generate.addEventListener("click", () => {
  let randomIndex = Math.floor(Math.random() * 6);

  fetch("https://prodeveder.github.io/VerseVault/assets/js/data.json")
    .then((response) => response.json())
    .then((data) => changeVerse(data));
});

const verseHeader = document.querySelector(".header__wrapper .title span");
const verseText = document.querySelector(".card__text p");
const verseTopic = document.querySelector(".topic");

const changeVerse = (data) => {
  let randomIndex = Math.floor(Math.random() * 9),
    randomIndexVerse = Math.floor(Math.random() * 5);

  verseHeader.textContent =
    data.BibleVerses[randomIndex].verses[randomIndexVerse].reference;
  verseText.textContent =
    data.BibleVerses[randomIndex].verses[randomIndexVerse].text;
  verseTopic.textContent = data.BibleVerses[randomIndex].topic;
};
