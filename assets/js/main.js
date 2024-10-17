const TheBooks = document.querySelectorAll(".bible__book");

// TheBooks[0].innerHTML += "<div class='__book '>Genesis</div>";

// Get the list of books for the BSB translation
fetch(`https://bible.helloao.org/api/ENGWEBP/books.json`)
  .then((response) => response.json())
  .then((books) => {
    books.books.forEach((book, index) => {
      const bookHTML = `<a href="read.html" class="__book" data-id="${book.id}" data-chp="${book.numberOfChapters}">${book.name}</a>`;

      if (index < 39) {
        TheBooks[0].innerHTML += bookHTML; // Old Testament
      } else {
        TheBooks[1].innerHTML += bookHTML; // New Testament
      }
    });

    document.querySelectorAll(".__book").forEach((bookElement) => {
      bookElement.addEventListener("click", () => {
        const bookId = bookElement.getAttribute("data-id");
        const numberOfChapters = bookElement.getAttribute("data-chp");

        // console.log(`Book ID: ${bookId}`);
        // console.log(`Number of Chapters: ${numberOfChapters}`);

        localStorage.setItem("bookId", bookId);
        localStorage.setItem("Chapters", numberOfChapters);
      });
    });
  })
  .catch((error) => console.error("Error fetching books:", error));

// Get Genesis 1 from the BSB translation
// fetch(`https://bible.helloao.org/api/BSB/EXO/1.json`)
//   .then((request) => request.json())
//   .then((chapter) => {
//     console.log("Genesis 1 (BSB):", chapter);
//   });
