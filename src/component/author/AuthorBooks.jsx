import React from 'react';
import BookCard from '../BookCard.jsx';
import {Books} from '../../../public/book.js'
import { Link, useLocation, useParams } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";

const AuthorBooks = () => {
  const {category} = useParams();
  const location = useLocation();

  const {name, nameEn, image, count} = location.state || {};

  const books = Books.filter((book) => book.authorEn === `${nameEn}`)
  
  return (
    <div className='bg-white dark:bg-black dark:text-white'>
      <div className='max-w-6xl mx-auto px-4 py-8'>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
    
          <img
            src={image}
            className="w-36 h-36 md:w-52 md:h-52 object-cover border-4 border-black/20 rounded-full"
          />
  
        <div className="flex flex-col items-center sm:items-start justify-center sm:justify-start space-y-2">
          <h2 className="text-xl md:text-2xl font-bold uppercase">{category || "Unknown"}</h2>
          <h3 className="text-base dark:text-white/80 text-black/50 font-bold">{ name}</h3>
          <p className="mt-3 px-6 py-1 text-[16px] text-center border w-fit rounded-full font-medium text-gray-700 bg-gray-200">
            {books.length} books
          </p>
        </div>
      </div>
      <div className="border dark:border-white/30 border-black/5 mb-8"></div>
      <h3 className='text-2xl sm:text-3xl font-semibold tracking-wide'>All {category} Books</h3>
      <p className='mt-1 dark:text-white pb-2 sm:pb-4 text-black/80 text-[14px] font-bold tracking-wider'>{name} বইসমূহ</p>
      <BookCard books = {books}></BookCard>
    </div>
    </div>
  );
};

export default AuthorBooks;