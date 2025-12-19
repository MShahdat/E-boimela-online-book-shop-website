import React from 'react';
import BookCard from '../BookCard';
import {Books} from '../../../public/book.js';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";


const books = Books.filter((book) => book.category === 'ইসলামিক' || book.categoryEn === 'Islamic')
const book = books.slice(0,4)
// console.log(books)
const Islamic = () => {
  return (
    <div className='bg-blue-50 dark:bg-black dark:text-white'>
      <div className='max-w-6xl mx-auto px-4 py-4'>
      <h3 className='text-2xl sm:text-3xl font-semibold tracking-wide'>Islamic Books</h3>
      <p className='mt-0.5 pb-2 sm:pb-4 text-black/80 text-[14px] tracking-wider dark:text-white'>ইসলামিক বইসমূহ</p>
      <BookCard books = {book}></BookCard>
      {
              book.length >= 4 &&
              <Link to={'/genres/Islamic'} className='flex items-center text-orange-600 dark:text-white font-bold gap-2 justify-end'>
              <p className=''>See more</p>
              <FaArrowRight className='mt-1'/>
            </Link>
            }
    </div>
    </div>
  );
};

export default Islamic;