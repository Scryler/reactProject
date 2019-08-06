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

  /*constructor() {
    super();
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.paperBack = paperBack;
    this.ISBN = ISBN;
    this.summary = summary;
    this.img = img;
    this.stars = 0;

    this.state = {
      title: 'Max',
      author: 'asdf',
      publisher : 'dasdas',
      paperBack : 'sadas',
      ISBN : '',
      summary : '',
      img : '',
      stars : ''
    };
  }*/


  render() {
    return (
        <div className="list">{
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
              <p>{book.publisher}</p>
              <p>{book.paperBack}</p>
              <p>{book.ISBN}</p>
              <p>{book.summary}</p>
              <p>{book.stars}</p>
            </div>
          )
        }
        </div>
    )
  }
}


ReactDOM.render(<App/>, //Элемент, который хотим создать
  document.getElementById('app')//где мы этот элемент хотим создать
);
