// Création du tableau allBooks avec 2 livres
const allBooks = [
  {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    image: "https://upload.wikimedia.org/wikipedia/en/0/05/Littleprince.JPG",
    alreadyRead: true
  },
  {
    titre: "L'Étranger",
    auteur: "Albert Camus",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-AZq6GAgOFHkZX-D4kQX5ccwI2IV4AW2N0g&s",
    alreadyRead: false
  }
];


const listSection = document.querySelector('.listBooks');


allBooks.forEach(book => {
  const bookDiv = document.createElement('div');
  bookDiv.classList.add('book');
  if (book.alreadyRead) {
    bookDiv.classList.add('read');
  }

  const bookInfo = document.createElement('p');
  bookInfo.textContent = `${book.titre}, écrit par ${book.auteur}`;

  const bookImg = document.createElement('img');
  bookImg.src = book.image;
  bookImg.style.width = "100px";

  bookDiv.appendChild(bookInfo);
  bookDiv.appendChild(bookImg);

  listSection.appendChild(bookDiv);
});
