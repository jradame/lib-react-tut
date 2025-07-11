import React from 'react';
import { books } from '../data';
import Book from './ui/Book';

const Discounted = () => {
  return (
    <section id="discounted">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Books on <span className="purple">Discount</span>
          </h2>
          <div className="books">
            {books
              .filter(book => book.salePrice && book.salePrice < book.originalPrice)
              .slice(0, 8)
              .map((book) => (
                <Book book={book} key={book.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discounted;
