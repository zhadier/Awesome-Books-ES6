export default class Collection {
  constructor(books = []) {
    this.books = books;
  }

  add(data) {
    if (
      this.books.filter(
        (item) => item.author === data.author && item.title === data.title
      ).length > 0
    ) {
      txt.innerHTML = "Book Already Exists";
      setTimeout(() => {
        txt.innerHTML = "";
      }, 1500);
      return;
    } else if (data.title === "" || data.author === "") {
      txt.innerHTML = "Please fill all the fields";
      setTimeout(() => {
        txt.innerHTML = "";
      }, 1500);
      return;
    }
    txt.innerHTML = "Book Added";
    this.books.push(data);
    this.display(data);
    this.remove();
    this.populateStorage();
    inputAuthor.value = "";
    inputTitle.value = "";
    setTimeout(() => {
      txt.innerHTML = "";
    }, 1500);
  }

  remove() {
    const removeBtns = document.querySelectorAll(".remove-button");
    removeBtns[removeBtns.length - 1].addEventListener("click", (evt) => {
      this.removeFromColl(evt.target);
      bookSection.removeChild(evt.target.parentNode);
    });
  }

  display(data) {
    if (this) {
      const div = document.createElement("div");
      div.className = "book-wraper";
      div.innerHTML = `<h3>"${data.title}" by</h3>
                    <h3>${data.author}</h3>
                    <button data-value="${data.title}-${data.author}" type="button" class ="remove-button">Remove</button>`;
      bookSection.appendChild(div);
    }
  }

  removeFromColl(data) {
    const arr = data.getAttribute("data-value").split("-");
    this.books = this.books.filter(
      (item) => item.title + item.author !== arr[0] + arr[1]
    );
    this.populateStorage();
  }

  populateStorage() {
    localStorage.setItem(
      "bookCollection",
      JSON.stringify({
        bookColl: this.books,
      })
    );
  }
}
