import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Books } from '../../public/book';
import { MdOutlineStar, MdOutlineLanguage } from "react-icons/md";
import { FaBookOpen, FaPrint, FaCartShopping, FaCheck } from "react-icons/fa6";
import { RiPagesLine } from "react-icons/ri";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaArrowDown } from "react-icons/fa";
import { FaFacebook, FaWhatsappSquare, FaTwitter, FaInstagramSquare, FaCheckCircle } from "react-icons/fa";
import { IoReaderSharp } from "react-icons/io5";
import { dataContext } from '../context/Context';
import { toast } from 'react-toastify';
import { IoIosCheckmarkCircle } from "react-icons/io";

const BooksDetails = () => {

  const [, , , , , , , , , addToCart, cart, removeCart] = useContext(dataContext);

  const { id } = useParams();
  const book = Books.find((b) => b.id === Number(id));


  const isAdded = cart.some(item => item.id === book.id);


  if (!book) {
    return <p className="p-6 text-red-600">Book not found</p>;
  }

  const isFree = Number(book.price) === 0;

  const handleRead = () => {
    if (book.book) {
      window.open(book.book, '_blank', 'noopener,noreferrer');
    }
  };

  const handleDownload = () => {
    if (book.book) {
      const link = document.createElement('a');
      link.href = book.book;
      const safeTitle = (book.title || 'book')
        .replace(/[^\u0980-\u09FF\w\s-]/g, '')
        .replace(/\s+/g, '_');
      link.download = `${safeTitle}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className='bg-gray-50 dark:bg-black dark:text-white'>
      <div className="px-4 pt-8 mx-auto max-w-7xl">
        <div className='flex flex-col lg:flex-row gap-10 xl:gap-4 lg:gap-0 py-6'>

          {/* Left Image */}
          <div className='w-full lg:w-1/3 mx-auto flex justify-center'>
            <img className='w-72 h-108 object-cover rounded-md' src={book.image} alt={book.title} />
          </div>

          {/* Right Content */}
          <div className='w-full lg:w-2/3 flex flex-col'>
            <div className='flex flex-col items-center text-center lg:items-start lg:text-left'>
              <h1 className='text-xl sm:text-3xl md:text-3xl font-bold dark:text-white text-blue-950'>{book.title}</h1>
              <p className='mt-2 text-sm sm:text-base dark:text-white text-gray-800'>{book.author}</p>
              <div className='flex items-center gap-2 mt-3 font-bold'>
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <MdOutlineStar
                      key={index}
                      className={`size-5 ${index < book.rating ? "text-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                </div>
                <p className='text-base'>{Number(book.rating).toFixed(2)}</p>
                <span className='text-sm dark:text-white text-blue-900'>( {book.ratingCount} reviews)</span>
              </div>
              <Link className='mt-3'>
                <button className='border px-4 py-1 text-sm font-semibold rounded-full dark:text-black bg-gray-100 hover:scale-105 duration-300 hover:bg-gray-300'>
                  {book.category}
                </button>
              </Link>
            </div>

            {/* Book Details */}
            <div className='mt-6 p-6 sm:p-12 bg-gray-100 rounded-lg'>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center'>
                <div className='flex flex-col items-center space-y-1'>
                  <FaBookOpen className='text-blue-900' />
                  <p className='text-sm font-semibold text-blue-900'>Published</p>
                  <h2 className='dark:text-black font-bold text-sm'>{book.publishedDate}</h2>
                </div>
                <div className='flex flex-col items-center space-y-1'>
                  <MdOutlineLanguage className='text-blue-900' />
                  <p className='text-sm font-semibold text-blue-900'>Language</p>
                  <p className='dark:text-black font-bold text-sm'>{book.language}</p>
                </div>
                <div className='flex flex-col items-center space-y-1'>
                  <RiPagesLine className='text-blue-900' />
                  <p className='text-sm font-semibold text-blue-900'>Pages</p>
                  <p className='dark:text-black font-bold text-sm'>{book.pages}</p>
                </div>
                <div className='flex flex-col items-center space-y-1'>
                  <FaPrint className='text-blue-900' />
                  <p className='text-sm font-semibold text-blue-900'>Published by</p>
                  <p className='dark:text-black font-bold text-sm text-center'>{book.publisher}</p>
                </div>
              </div>
            </div>

            {/* Price and Actions */}
            <div className='py-8'>
              <div className='flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-4'>
                <div className=' flex gap-0.5 items-center text-2xl font-bold text-blue-900 dark:text-white'>
                  <TbCurrencyTaka />
                  <span>{book.price}</span>
                </div>

                {/* ✅ Conditionally render buttons */}
                <div className='flex gap-3 flex-wrap'>
                  {isFree ? (
                    <>
                      <button
                        onClick={handleRead}
                        className='border px-4 py-1.5 font-semibold rounded-full bg-black text-white hover:bg-blue-950 cursor-pointer flex gap-2 items-center'
                      >
                        <IoReaderSharp />
                        <p className='text-sm'>Full Read</p>
                      </button>
                      <button onClick={() => handleDownload()} className='border px-4 py-1.5 font-semibold rounded-full bg-black text-white hover:bg-blue-950 cursor-pointer flex gap-2 items-center'
                      >
                        <FaArrowDown />
                        <p className='text-sm'>Download</p>
                      </button>
                    </>
                  ) : (
                    <button onClick={() => {
                      if (!isAdded) {
                        addToCart(book)
                        toast.success('cart added successfull!');
                      }
                    }}
                    disabled = {isAdded}
                      className='border px-4 py-1.5 font-semibold rounded-full bg-black text-white hover:bg-blue-950 cursor-pointer flex gap-2 items-center'
                    >
                      {isAdded ? <IoIosCheckmarkCircle /> : <FaCartShopping />}
                      <p>{isAdded ? 'Added' : 'Add to Cart'}</p>
                    </button>
                  )}
                </div>
              </div>

              {/* Share Section */}
              <div className='py-6 flex items-center gap-8 '>
                <p className='dark:text-white text-blue-950 text-xl sm:text-2xl font-bold'>Share</p>
                <div className='flex gap-6 mt-1'>
                  <a href='https://www.facebook.com/'><FaFacebook className='text-blue-700 dark:text-white size-7' /></a>
                  <a href='https://www.whatsapp.com/'><FaWhatsappSquare className='dark:text-white text-green-600 size-7' /></a>
                  <a href='https://x.com/'><FaTwitter className='text-blue-900 dark:text-white size-7' /></a>
                  <a href='https://www.instagram.com/'><FaInstagramSquare className='text-orange-700 dark:text-white  size-7' /></a>
                </div>
              </div>

              {/* About Book */}
              <div className='pt-6'>
                <h2 className='font-marko-one text-xl sm:text-2xl dark:text-white font-bold text-blue-950'>About this book</h2>
                <p className='mt-4 text-justify text-sm sm:text-base leading-relaxed'>
                  {book.about}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BooksDetails;
