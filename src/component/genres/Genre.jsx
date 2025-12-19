import React, { useMemo } from 'react';
import { Books } from '../../../public/book';
import { Link } from 'react-router-dom';

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

  return (
    <div className="bg-white dark:bg-black">
      <div className=" py-10 max-w-6xl mx-auto">
        <div className="px-4 mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-marko-one text-3xl font-bold text-black dark:text-white mb-2">Genres</h2>
              <p className="text-lg dark:text-white">
                Explore our collection of books across different genres
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 space-y-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
            {categories.map((genre, idx) => (
              <Link key={idx}
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genre;