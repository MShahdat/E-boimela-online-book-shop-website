import React, { useState } from 'react';
import BookCard from '../BookCard';
import { Books } from '../../../public/book.js';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { fadeIn } from '../../motion/motion.js';
import { isFirstVisit } from '../../motion/visit.jsx';


const book = Books.slice(0, 4)
// console.log(book)
const New = () => {
  const [animate] = useState(() => isFirstVisit('new'))
  
  return (
    <div className='bg-red-50 dark:bg-black'>
      <div className='max-w-6xl mx-auto px-4 py-4'>
        <motion.h3
          variants={animate ? fadeIn('up', 0.15) : undefined}
          initial={animate ? 'hidden' : undefined}
          whileInView={animate ? 'show' : undefined}
          viewport={{once: true}}
          className='text-2xl sm:text-3xl font-semibold tracking-wide dark:text-white'>New Books</motion.h3>
        <motion.p
          variants={animate ? fadeIn('up', 0.2) : undefined}
          initial={animate ? 'hidden' : undefined}
          whileInView={animate ? 'show' : undefined}
          viewport={{once: true}}
          className='mt-0.5 pb-2 sm:pb-4 dark:text-white text-black/80 text-[14px] tracking-wider'>নতুন বইসমূহ</motion.p>
        <BookCard books={book}></BookCard>
      </div>
    </div>
  );
};

export default New;