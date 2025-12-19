import React from 'react';
import BookCard from '../BookCard';
import {Books} from '../../../public/book.js';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

const book = Books.slice(0,4)
// console.log(book)
const New = () => {
  return (
    <div className='bg-red-50 dark:bg-black'>
      <div className='max-w-6xl mx-auto px-4 py-4'>
      <h3 className='text-2xl sm:text-3xl font-semibold tracking-wide dark:text-white'>New Books</h3>
      <p className='mt-0.5 pb-2 sm:pb-4 dark:text-white text-black/80 text-[14px] tracking-wider'>নতুন বইসমূহ</p>
      <BookCard books = {book}></BookCard>
    </div>
    </div>
  );
};

export default New;