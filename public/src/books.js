//uses find method
function findAuthorById(authors, id) {
  let authorId = authors.find((author) => author.id === id);
  return authorId;
}

////uses find method
function findBookById(books, id) 
{let bookId = books.find((book) => book.id === id);
  return bookId;
}

//uses for each
function partitionBooksByBorrowedStatus(books) {
  let result = [];
    let borrowedBooks = [];
    let availableBooks = [];
    books.forEach((book) => 
    book.borrows[0].returned
    ? availableBooks.push(book)
    : borrowedBooks.push(book));
    result.push(borrowedBooks, availableBooks);
    return result;
}

//uses for of
function getBorrowersForBook(book, accounts) {
 let borrowed = []
 for (let account of accounts){
   let borrowedBooks = book.borrows.find(borrow => borrow.id === account.id)
   if (borrowedBooks)
     borrowed.push({...account, returned:borrowedBooks.returned})  
 }
  return borrowed
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
