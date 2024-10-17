const chapters = parseInt(localStorage.getItem("Chapters")) + 1;
const bookId = localStorage.getItem("bookId");

const bookMain = document.querySelector(".book__container");
const read = document.querySelector(".header__wrapper .title span");

let c = 1; // Start from chapter 1

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchChapters() {
  while (c < chapters) {
    await delay(150); // Introduce a 150ms delay between each request

    fetch(`https://bible.helloao.org/api/eng_kjv/${bookId}/${c}.json`)
      .then((response) => response.json())
      .then((chapter) => {
        let chapterNumber = chapter.chapter.number;
        let bookName = chapter.book.name;
        read.textContent = "🙏" + bookName + "🙏";

        let verseContainer = "";
        let i = 0;

        while (i < chapter.chapter.content.length) {
          let index = `<span class='number'>${i + 1}.</span>`;
          let verse = `<p>${index + chapter.chapter.content[i].content}</p>`;
          let fixedVerse = verse.replace(",[object Object]", "");
          if (
            chapter.chapter.content[i].content === "[object Object]" ||
            chapter.chapter.content[i].content ===
              ",[object Object],[object Object]"
          ) {
            fixedVerse =
              "<p><span class='number'>ERROR</span>unable to fetch Verse😭</p>";
            verseContainer += fixedVerse;
          } else {
            verseContainer += fixedVerse;
          }

          i++;
        }

        let chapterContainer = `
          <div class="chapter__container">
            <div class="chapter__header">Chapter ${chapterNumber}</div>
            <div class="chapter__verses" style="display: none;">
              ${verseContainer}
            </div>
          </div>
        `;

        bookMain.innerHTML += chapterContainer;

        // Now that chapters are added, add the click event listener to the chapter headers
        const chapterHeaders = document.querySelectorAll(".chapter__header");
        chapterHeaders.forEach((element) => {
          element.addEventListener("click", () => {
            // Toggle the visibility of the associated chapter__verses
            const verses = element.nextElementSibling; // Get the next sibling (chapter__verses)
            if (verses.style.display === "none") {
              verses.style.display = "flex"; // Show the verses
            } else {
              verses.style.display = "none"; // Hide the verses
            }
          });
        });
      })
      .catch((error) => console.error("Error fetching chapter:", error));

    c++;
  }
}

fetchChapters();
