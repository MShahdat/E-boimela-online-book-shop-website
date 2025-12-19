import React, { useMemo } from 'react';
import { Books } from '../../../public/book';
import { Link } from 'react-router-dom';

const Publisher = () => {
  const publisher = useMemo(() => {
    const map = {};

    Books.forEach((book) => {
      if (!map[book.publisherEn]) {
        map[book.publisherEn] = {
          name: book.publisher,
          nameEn: book.publisherEn,
          count: 1,
          image: book.publisherCover,
        }
      } else {
        map[book.publisherEn].count += 1;
      }
    })
    return Object.values(map);
  }, [Books])

  return (
    <div className="bg-white dark:bg-black ">
      <div className=" py-10 max-w-6xl mx-auto">
        <div className="px-4 mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-marko-one text-3xl font-bold dark:text-white mb-2">Publisher</h2>
              <p className=" text-lg dark:text-white mb-6">
                Explore our collection of books across different publisher
              </p>
            </div>
          </div>
          <div className="grid gap-4 space-y-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5">
            {publisher.map((publisher, idx) => (
              <Link key={idx}
                to={`/publishers/${publisher.nameEn}`}
                state={{
                  name: publisher.name,
                  nameEn: publisher.nameEn,
                  image: publisher.image,
                  count: publisher.count,
                }}
              >
                <div className="bg-white shadow-2xl py-4 rounded-xl flex flex-col items-center text-center  hover:scale-105 transform duration-300">
                  <img
                    className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-full mb-1.5"
                    src={publisher.image}
                    alt={publisher.nameEn}
                  />
                  <p className="text-md font-bold uppercase">{publisher.name}</p>
                  <p className="mt-1 text-sm text-black/70 font-semibold">{publisher.nameEn}</p>
                  <p className="mt-3 px-3 py-1 text-xs border rounded-full font-medium text-gray-700 bg-gray-200">
                    {publisher.count} books
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Publisher;