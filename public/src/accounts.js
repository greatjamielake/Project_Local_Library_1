
//uses find method
function findAccountById(accounts, id) {
  let accountId = accounts.find((account) => account.id === id);
  return accountId;
}

//uses sort
function sortAccountsByLastName(accounts) {
   return accounts.sort((lastA,lastB) => (lastA.name.last > lastB.name.last ? 1 : 
    -1));
}

//uses for each
function getTotalNumberOfBorrows(accounts, books) {
  let totalBorrows = 0;
  books.forEach((book) => {
    book.borrows.forEach((borrowed) => {
    if (accounts.id === borrowed.id) totalBorrows +=1;
  });
  });
  return totalBorrows;
  }

//uses filter and map
function getBooksPossessedByAccount(account, books, authors) {
  let borrowedBooks = 
  books.filter((book) => book.borrows.find((borrow) => borrow.returned === false && borrow.id === account.id) )
  return borrowedBooks.map((book) => {
    return{...book, author: authors.find((author) => author.id === book.authorId)}
  })
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
