import Collection from "./modules/collection.js";
import Book from "./modules/book.js";
import loadNavigation from "./modules/navigation.js";

loadNavigation();

const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const submitBtn = document.querySelector(".add-btn");
const bookSection = document.querySelector(".books");
const txt = document.querySelector("form > p");

const coll = new Collection();
if (localStorage.getItem("bookCollection")) {
  const localBooks = JSON.parse(localStorage.getItem("bookCollection"));
  localBooks.bookColl.forEach((element) => {
    coll.add(new Book(element.title, element.author));
  });
}

submitBtn.addEventListener("click", () => {
  coll.add(new Book(inputTitle.value, inputAuthor.value));
});
