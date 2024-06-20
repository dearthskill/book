const myLibrary = [];
const bookButton = document.getElementById("newBook")
const form = document.getElementById("form")
const closeButton = document.getElementById("close")
const addBook = document.getElementById("addbtn")
const overlay = document.getElementById("overlay")

closeButton.addEventListener("click", formToggle)
addBook.addEventListener("click", addBookToLibrary)

bookButton.addEventListener("click",formToggle)

function formToggle()
{
    overlay.classList.toggle("active")
    form.classList.toggle("active")
}

let newBook;

function addBookToLibrary(event){
    event.preventDefault();
    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let pages = document.getElementById("pages").value
    let read = document.getElementById("read").checked;
    newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    render();
    form.reset();
    
}

class Book {
    constructor(title,author,pages,read)
    {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

function render(){
    const container = document.getElementById("library")
    container.innerHTML = "";
    for(i =0;i<myLibrary.length;i++){
        var card = document.createElement("div")
        card.className = "card";
        card.innerHTML=` <span class="title">${myLibrary[i].title}</span>
            <span class="author">${myLibrary[i].author}</span>
            <span class="pages">${myLibrary[i].pages}</span>
            <button class="readButton" onclick="readToggle(${i})"${myLibrary[i].read?"style='background-color: #84cc16' id='done'" : "style='background-color:#b91c1c'"}>${myLibrary[i].read? "Read" : "Not read"}</button>
            <button class="remove" onclick="removeBook(${i})">Remove</button>
        `
        container.appendChild(card)

        }
        }

function removeBook(index){
    myLibrary.splice(index,1)
    render()
    console.log(myLibrary)
}

function readToggle(index){
    myLibrary[index].read= !myLibrary[index].read
    console.log(myLibrary[index].read)
    render();
}