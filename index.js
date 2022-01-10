import Collection from "./modules/collection.js";
import Book from "./modules/book.js";
import loadNavigation from "./modules/navigation.js";
import { DateTime } from "./node_modules/luxon/src/luxon.js";

loadNavigation();

const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const submitBtn = document.querySelector(".add-btn");
const dateBox = document.querySelector(".date");

const dt = DateTime.now();
dateBox.innerHTML = `${dt.monthLong}, ${dt.day} ${dt.weekYear}. ${dt.hour}:${dt.minute}:${dt.second}`;

const coll = new Collection();
if (localStorage.getItem("bookCollection")) {
  const localBooks = JSON.parse(localStorage.getItem("bookCollection"));
  localBooks.bookColl.forEach((element) => {
    coll.add(new Book(element.title, element.author));
  });
}

submitBtn.addEventListener("click", () => {
  coll.add(new Book(inputTitle.value, inputAuthor.value));
  inputAuthor.value = "";
  inputTitle.value = "";
});


