// eslint-disable-next-line import/no-unresolved
import { DateTime } from '../../../../node_modules/luxon/src/luxon.js';
import { BookList } from './modules/bookList.js';

// eslint-disable-next-line no-unused-vars
const bookList = new BookList();

const Booklink = document.getElementById('book-link');
const Addlink = document.getElementById('add-link');
const Contactlink = document.getElementById('contact-link');
const Booklist = document.getElementById('booklist');
const AddBook = document.getElementById('Add-Books');
const Contact = document.getElementById('contact');

Booklink.addEventListener('click', () => {
  Booklist.style.display = 'block';
  AddBook.style.display = 'none';
  Contact.style.display = 'none';
});

Addlink.addEventListener('click', () => {
  Booklist.style.display = 'none';
  AddBook.style.display = 'block';
  Contact.style.display = 'none';
});

Contactlink.addEventListener('click', () => {
  Booklist.style.display = 'none';
  AddBook.style.display = 'none';
  Contact.style.display = 'flex';
});

function CurrentDate() {
  const dateElement = document.getElementById('date');
  const currentDate = DateTime.now();

  dateElement.textContent = currentDate;
}

CurrentDate();
