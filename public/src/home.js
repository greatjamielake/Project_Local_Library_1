function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let result = 0
  books.forEach((book) => {
    if (book.borrows[0].returned === false){
      result+=1;
    }
  })
  return result
}

function getMostCommonGenres(books) {
  let genres = [];
  books.forEach((book) => {
    let genreIndex = genres.findIndex((genre) => {
      return genre.name === book.genre;
    });
    if (genreIndex !== -1) {
      genres[genreIndex].count++;
    } else {
      genres.push({ name: book.genre, count: 1 });
    }
  });
  genres.sort((a, b) => b.count - a.count);
  return genres.slice(0, 5);
} 

function getMostPopularBooks(books) {
  let popularityBooks = [];
    books.forEach((book) => {
      popularityBooks.push({"name": book.title, "count": book.borrows.length});
    });
  popularityBooks.sort((a, b) => b.count - a.count);
 
  let numberItems=5;
  return popularityBooks.slice(0, numberItems);    
}


// This is my helper function
function _sortObjectByValues(obj) {
  const keys = Object.keys(obj);

  return keys.sort((keyA, keyB) => {
    if (obj[keyA] > obj[keyB]) {
      return -1;
    } else if (obj[keyB] > obj[keyA]) {
      return 1;
    } else {
      return 0;
    }
  });
}

//accumulator function
function getMostPopularAuthors(books, authors) {
  const count = books.reduce((acc, { authorId, borrows }) => {
    if (acc[authorId]) {
      acc[authorId].push(borrows.length);
    } else {
      acc[authorId] = [borrows.length];
    }
    return acc;
  }, {});
  //console.log(count);

  for (let id in count) {
    const sum = count[id].reduce((acc, b) => acc + b);
    count[id] = sum;
  }
  //console.log(count);

  const sorted = _sortObjectByValues(count);
  //console.log(sorted);

  let arr = sorted
    .map((authorId) => {
      const {
        name: { first, last },
      } = authors.find(({ id }) => id === Number(authorId));
      let name = `${first} ${last}`;
      return { name, count: count[authorId] };
    })
    .slice(0, 5);
  console.log(arr);
  //{ name: "Cristina Buchanan", count: 112 },
  return arr;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
