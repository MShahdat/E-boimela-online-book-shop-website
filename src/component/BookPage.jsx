import React from 'react';
import BookCard from './BookCard.jsx';
import {Books} from '../../public/book.js';
import { Link, useParams } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";


const BookPage = () => {

  const {category} = useParams();
  const books = Books.filter((book) => book.category === '' || book.categoryEn === `${category}`)

  
  return (
    <div className='max-w-6xl mx-auto px-4 py-4'>
      <h3 className='text-2xl sm:text-3xl font-semibold tracking-wide'> All {category} Books</h3>
      <p className='mt-0.5 pb-2 sm:pb-4 text-black/80 text-[14px] tracking-wider'> বইসমূহ</p>
      <BookCard books = {books}></BookCard>
      {
              <Link className='flex items-center text-green-700 font-bold gap-2 justify-end'>
              <p className=''>See more</p>
              <FaArrowRight className='mt-1'/>
            </Link>
            }
    </div>
  );
};

export default BookPage;