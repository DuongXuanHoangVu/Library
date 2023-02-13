let myLibrary = []
const submitBtn = document.querySelector('.submit')
const bookName = document.querySelector('input[name="book"]')
const bookAuthor = document.querySelector('input[name="author"]')
const bookList = document.querySelector('.book-list')

bookName.focus()

function Book(name, author) {
    this.name = name
    this.author = author
    this.isRead = false
    this.getData = function () {
        return {
            name,
            author,
            isRead: this.isRead
        }
    }
}

function addBookToLibrary () {
    let name = bookName.value
    let author = bookAuthor.value
    let newBook = new Book(name, author)
    return newBook.getData()
}

function renderBooks() {
    const htmls = myLibrary.map((item, index) => {
        return `
        <div class="book-item" data-index=${index}>
            <div class="book-info">
                <h1>Tên sách: ${item.name}</h1>
                <p>Tác giả: ${item.author}</p>
                <p>Trạng thái:${item.isRead ? "Đang đọc" : "Chưa đọc"}</p>
            </div>
            <div class="btns">
                <button class="btn" onclick="removeBook(${index})">Remove</button>
                <button class="btn" onclick="changeStatus(${index})">Read</button>
            </div>
        </div>`
    })
    bookList.innerHTML = htmls.join('')
}

function removeBook(id) {
    delete myLibrary[id]
    renderBooks()
}

function changeStatus(id) {
    myLibrary[id].isRead = !myLibrary[id].isRead
    renderBooks()
}

submitBtn.onclick = function () {
    myLibrary.push(addBookToLibrary())
    renderBooks()
    bookName.value = ''
    bookAuthor.value = ''
    bookName.focus()
}





