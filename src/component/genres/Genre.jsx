import React, { useMemo, useState } from 'react';
import { Books } from '../../../public/book';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import { fadeIn, Stagger, StaggerChild } from '../../motion/motion';
import { isFirstVisit } from '../../motion/visit';


const Genre = () => {
  const categories = useMemo(() => {
    const map = {};

    Books.forEach((book) => {
      if (!map[book.category]) {
        map[book.category] = {
          name: book.category,
          nameEn: book.categoryEn,
          count: 1,
          image: book.image,
        }
      } else {
        map[book.category].count += 1;
      }
    })
    return Object.values(map);
  }, [Books])

  const [animate] = useState(() => isFirstVisit('genre'))

  return (
    <div className="bg-white dark:bg-black">
      <div className=" py-10 max-w-6xl mx-auto">
        <div className="px-4 mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <motion.h2
              variants={animate ?  fadeIn('up', 0.15) : undefined}
              initial = {animate ?  'hidden' : undefined}
              whileInView={animate ?  'show' : undefined}
              viewport={{once: true}}
              
              className="font-marko-one text-3xl font-bold text-black dark:text-white mb-2">Genres</motion.h2>
              <motion.p
              variants={animate ?  fadeIn('up', 0.2) : undefined}
              initial = {animate ?  'hidden' : undefined}
              whileInView={animate ?  'show' : undefined}
              viewport={{once: true}}
              className="text-lg dark:text-white">
                Explore our collection of books across different genres
              </motion.p>
            </div>
          </div>
          <motion.div
          variants={animate ? Stagger : undefined}
          initial = {animate ? 'hidden' : undefined}
          whileInView={animate ? 'show' : undefined}
          viewport={{once: true}}

          className="mt-6 grid gap-4 space-y-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
            {categories.map((genre, idx) => (
              <motion.div
              variants={StaggerChild}
              key={idx}>
                <Link
                to={`/genres/${genre.nameEn}`}
                state={{
                  name: genre.name,
                  nameEn: genre.nameEn,
                  image: genre.image,
                  count: genre.count,
                }}
              >
                <div className="bg-white shadow-2xl rounded-xl flex flex-col items-center text-center py-4 hover:scale-105 transform duration-300">
                  <img
                    className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full mb-1.5"
                    src={genre.image}
                    alt={genre.nameEn}
                  />
                  <p className="text-md font-bold pb-0.5 uppercase">{genre.name}</p>
                  <p className="text-sm text-black/70 font-semibold">{genre.nameEn}</p>
                  <span className="mt-2 px-3 py-1 text-xs border rounded-full font-medium text-gray-700 bg-gray-200">
                    {genre.count} books
                  </span>
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

export default Genre;