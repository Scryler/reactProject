import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const mass = {
  books: [
    {
      title: 'Max',
      author: 'asdf',
      publisher: 'dasdas',
      paperBack: 'sadas',
      ISBN: 'a',
      summary: 22,
      img: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/i/m/img_0005_16_10.jpg',
      stars: 1
    },
    {
      title: 'Maxx',
      author: 'asdf',
      publisher: 'dasdas',
      paperBack: 'sadas',
      ISBN: 's',
      summary: 33,
      img: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/i/m/img_0005_16_10.jpg',
      stars: 2
    },
    {
      title: 'Maxxx',
      author: 'asdf',
      publisher: 'dasdas',
      paperBack: 'sadas',
      ISBN: 'd',
      summary: 44,
      img: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/i/m/img_0005_16_10.jpg',
      stars: 3
    },
    {
      title: 'Maxxxx',
      author: 'asdf',
      publisher: 'dasdas',
      paperBack: 'sadas',
      ISBN: 'v',
      summary: 55,
      img: 'https://img.yakaboo.ua/media/catalog/product/cache/1/image/398x565/234c7c011ba026e66d29567e1be1d1f7/i/m/img_0005_16_10.jpg',
      stars: 4
    },
  ]
};



class App extends React.Component {


  renderTabs() {
    return (
      <div className="mainTab">
        <button className="addTab">ADD A BOOK</button>
        <div className="tab">
          <button>Now Reading</button>
          <button>Browse</button>
          <button>Buy Books</button>
          <button>Favourite Books</button>
          <button>Wishlist</button>
        </div>
      </div>
    )
  }

  renderHeader() {
    return (
      <div className="mainHead">
        <div className="header">
          <h2>Browse Available Books</h2>
        </div>
        <div className="trigger">
          <button>All books</button>
          <button>Most Recent</button>
          <button>Most Popular</button>
          <button>Free Books</button>
        </div>
      </div>
    )
  }

  renderBooks() {
    return (
      <div className="main">
        {this.renderTabs()}
        <div className="app">
          {this.renderHeader()}
          <div className="list">
            {
              mass.books.map((book) =>
                <div className="book">
                  <div className="book-img">
                    <img
                      src={book.img}
                      alt={book.title}
                    />
                  </div>
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                  <p>{book.stars}</p>
                </div>
              )
            }
          </div>
        </div>
      </div>
    )
  }

  render() {
    return (
      this.renderBooks()
    )
  }
}


ReactDOM.render(<App/>, //Элемент, который хотим создать
  document.getElementById('app')//где мы этот элемент хотим создать
);
