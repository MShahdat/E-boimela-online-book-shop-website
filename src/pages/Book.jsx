import React from 'react';
import {Books} from '../../public/book.js';
import BookCard from '../component/BookCard.jsx';

const books = Books;
const Book = () => {
  return (
    <div className='max-w-6xl px-4 py-8 mx-auto'>
      <h3 className='text-2xl sm:text-3xl font-semibold tracking-wide'>All Caregory Books</h3>
      <p className='mt-0.5 pb-2 sm:pb-4 text-black/80 text-[14px] tracking-wider'>সব ক্যাটাগরির বইসমূহ</p>
        <BookCard books = {books}></BookCard>      
    </div>
  );
};

export default Book;