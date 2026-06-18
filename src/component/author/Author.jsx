import React, { useMemo, useState } from 'react';
import { Books } from '../../../public/book.js';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import { fadeIn, StaggerChild, Stagger } from '../../motion/motion.js';
import { isFirstVisit } from '../../motion/visit.jsx';


const Author = () => {
  const author = useMemo(() => {
    const map = {};

    Books.forEach((book) => {
      if (!map[book.authorEn]) {
        map[book.authorEn] = {
          name: book.author,
          nameEn: book.authorEn,
          count: 1,
          image: book.authorCover,
        }
      } else {
        map[book.authorEn].count += 1;
      }
    })
    return Object.values(map);
  }, [Books])

  const [animate] = useState(() => isFirstVisit('author'))
  return (
    <div className="bg-white/60 dark:bg-black dark:text-white">
      <div className=" py-10 max-w-6xl mx-auto">
        <div className="px-4 mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <motion.h2
              variants={animate ? fadeIn('up', 0.15) : undefined}
                            initial = {animate ? 'hidden' : undefined}
                            whileInView={animate ? 'show' : undefined}
              className="font-marko-one text-3xl font-bold mb-2">Authors</motion.h2>
              <motion.p
              variants={animate ? fadeIn('up', 0.2) : undefined}
                            initial = {animate ? 'hidden' : undefined}
                            whileInView={animate ? 'show' : undefined}
              className="font-playwrite-grundschrift text-lg mb-6">
                Explore our collection of books across different authors
              </motion.p>
            </div>
          </div>
          <motion.div
          variants={animate ? Stagger : undefined}
                    initial = {animate ? 'hidden' : undefined}
                    whileInView={animate ? 'show' : undefined}
           className="grid gap-4 space-y-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
            {author.map((author, idx) => (
              <motion.div
              variants={StaggerChild}
              key={idx}>
                <Link
                to={`/authors/${author.nameEn}`}
                state={{
                  name: author.name,
                  nameEn: author.nameEn,
                  image: author.image,
                  count: author.count,
                }}
              >
                <div className="flex border border-white/20 rounded-2xl flex-col items-center text-center hover:scale-105 p-3 transform duration-300">
                  <img
                    className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full"
                    src={author.image}
                    alt={author.nameEn}
                  />

                  <p className="mt-2 text-md font-bold">{author.name}</p>
                  <p className="mt-0.5 uppercase text-sm dark:text-white/75 text-black/70 font-semibold">{author.nameEn}</p>
                  <p className="mt-2 px-3 py-1 text-xs border rounded-full font-medium text-gray-700 bg-gray-200">
                    {author.count} books
                  </p>

                </div>
              </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Author;