import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";

const Book = (book) => {
  return (
    <Link to = {`/book/${book.id}`} {...book}>
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src = {book.cover_img} alt = "cover" />
      </div>
      <div className='book-item-info text-center'>
       
          <div className='book-item-info-item title fw-7 fs-18'>
            <span style={{ color: 'black' }}>{book.title}</span>
          </div>
       

        <div className='book-item-info-item author fs-15'>
          <span style={{ color: 'black' }}className='text-capitalize fw-7'>Author: </span>
          <span style={{ color: 'black' }}>{book.author.join(", ")}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span style={{ color: 'black' }} className='text-capitalize fw-7'>Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span style={{ color: 'black' }}className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default Book