export default () => {
  const navAdd = document.querySelector('#addNew');
  const navList = document.querySelector('#list');
  const navContact = document.querySelector('#contact');
  const booksWindow = document.querySelector('.books-section');
  const addWindow = document.querySelector('.add-books');
  const contactWindow = document.querySelector('.contact-section');

  navAdd.addEventListener('click', (evt) => {
    evt.preventDefault();
    addWindow.classList.remove('toggle');
    booksWindow.classList.add('toggle');
    contactWindow.classList.add('toggle');
  });

  navList.addEventListener('click', (evt) => {
    evt.preventDefault();
    booksWindow.classList.remove('toggle');
    addWindow.classList.add('toggle');
    contactWindow.classList.add('toggle');
  });

  navContact.addEventListener('click', (evt) => {
    evt.preventDefault();
    contactWindow.classList.remove('toggle');
    booksWindow.classList.add('toggle');
    addWindow.classList.add('toggle');
  });
};
