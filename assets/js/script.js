// Clear Local Storage 
localStorage.clear();

const generateVerse = () => {
  fetch("https://prodeveder.github.io/VerseVault/assets/js/data.json")
    .then((response) => response.json())
    .then((data) => changeVerse(data));
};

const changeVerse = (data) => {
  const verseHeader = document.querySelector(".header__wrapper .title span"),
    verseText = document.querySelector(".card__text p"),
    verseTopic = document.querySelector(".topic");

  let randomIndex = Math.floor(Math.random() * 9),
    randomIndexVerse = Math.floor(Math.random() * 5);

  verseHeader.textContent =
    data.BibleVerses[randomIndex].verses[randomIndexVerse].reference;
  verseText.textContent =
    data.BibleVerses[randomIndex].verses[randomIndexVerse].text;
  verseTopic.textContent = data.BibleVerses[randomIndex].topic;
};


