let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    // this.info = () => {
    //     console.log(title + " by " + author + ", " + pages + " pages, " + read);
    // }
}

function addBookToLibrary() {
    const nbtitle = document.getElementById("nb-title").value;
    const nbauthour = document.getElementById("nb-author").value;
    const nbpages = document.getElementById("nb-pages").value;
    const nbread = document.getElementById("haveread");
    const nbstatus = null;

    if(nbread.checked == true) {
        nbstatus = "Read";
    } else {
        nbstatus = "Not Read";
    }
    return new Book(nbtitle, nbauthour, nbpages, nbstatus);
    // nbbook.info();
    // myLibrary.push(nbbook);
    // console.log(myLibrary);

    // var newCard = document.createElement('div');
    // newCard.className = "card";
    // var ntitle = document.getElementById("title");
    // document.createTextNode(nbtitle);
    
    // document.body.appendChild(newCard);
}

const createBookCard = (Book) => {
    const bookCard = document.createElement('div');
    const titleCard = document.createElement('div');
    const authorCard = document.createElement('div');
    const pagesCard = document.createElement('div');
    const statusCard = document.createElement('button');
    const removeCard = document.createElement('button');

    titleCard.classList.add('title');
    authorCard.classList.add('author');
    pagesCard.classList.add('pages');
    statusCard.classList.add('status')
    statusCard.classList.add('btn');
    removeCard.classList.add('remove');
    removeCard.classList.add('btn');

    titleCard.textContent = `"${Book.title}"`;
    authorCard.textContent = `"${Book.author}"`;
    pagesCard.textContent = `${Book.pages} pages`;
    removeCard.textContent = 'Remove';

    if(Book.read == 'Read') {
        statusCard.textContent = 'Read';
    } else {
        statusCard.textContent = 'Not Read';
    }

    bookCard.appendChild(titleCard);
    bookCard.appendChild(authorCard);
    bookCard.appendChild(pagesCard);
    bookCard.appendChild(pagesCard);
    bookCard.appendChild(statusCard);
    bookCard.appendChild(removeCard);
}





// const book1 = new Book("The Hobbit", "J.R.R. Tolkein", 295, "not read yet");
// book1.info();