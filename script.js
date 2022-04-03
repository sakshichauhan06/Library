let myLibrary = [];

function toggle() {
    var blur = document.getElementById('blur');
    blur.classList.toggle('active');
    var ncard = document.getElementById('ncard')
    ncard.classList.toggle('active');
}

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = () => {
        console.log(title + " by " + author + ", " + pages + " pages, " + read);
    }
}

function addBookToLibrary() {
    let nbtitle = document.getElementById("nb-title").value;
    let nbauthour = document.getElementById("nb-author").value;
    let nbpages = document.getElementById("nb-pages").value;
    let nbread = document.getElementById("haveread");
    let nbstatus = null;

    if(nbread.checked == true) {
        nbstatus = "Read";
    } else {
        nbstatus = "Not Read";
    }
    const nbook = new Book(nbtitle, nbauthour, nbpages, nbstatus);

    nbook.info();
    myLibrary.push(nbook);
    console.log(myLibrary);

    for(let book of myLibrary) {
        createBookCard(book);
    }

    // for(let j = i; j<myLibrary.length; j++) {
    //     createBookCard(myLibrary[j]);
    // }

    // var newCard = document.createElement('div');
    // newCard.className = "card";
    // var ntitle = document.getElementById("title");
    // document.createTextNode(nbtitle);
    
    // document.body.appendChild(newCard);
}

let createBookCard = (Book) => {
    let bookCard = document.createElement('div');
    let titleCard = document.createElement('div');
    let authorCard = document.createElement('div');
    let pagesCard = document.createElement('div');
    let statusCard = document.createElement('button');
    let removeCard = document.createElement('button');

    titleCard.classList.add('title');
    authorCard.classList.add('author');
    pagesCard.classList.add('pages');
    statusCard.classList.add('status')
    statusCard.classList.add('btn');
    removeCard.classList.add('remove');
    removeCard.classList.add('btn');

    titleCard.textContent = `Title: ${Book.title}`;
    authorCard.textContent = `Author: ${Book.author}`;
    pagesCard.textContent = `Pages: ${Book.pages}`;
    removeCard.textContent = 'Remove';

    if(Book.read == 'Read') {
        statusCard.textContent = 'Read';
    } else {
        statusCard.textContent = 'Not Read';
    }

    bookCard.classList.add('card');
    document.querySelector('.library').appendChild(bookCard);

    bookCard.appendChild(titleCard);
    bookCard.appendChild(authorCard);
    bookCard.appendChild(pagesCard);
    bookCard.appendChild(pagesCard);
    bookCard.appendChild(statusCard);
    bookCard.appendChild(removeCard);
}





// const book1 = new Book("The Hobbit", "J.R.R. Tolkein", 295, "not read yet");
// book1.info();