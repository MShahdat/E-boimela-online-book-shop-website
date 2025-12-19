import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { FaSearch } from "react-icons/fa";
import { dataContext } from '../context/Context';
import { Books } from '../../public/book.js'
import { IoIosStar } from "react-icons/io";
import { TbCoinTakaFilled } from "react-icons/tb";
import { TbCurrencyTaka } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';


const Search = () => {
  const [
    name,
    open,
    setOpen,
    video,
    setVideo,
    payment,
    setPayment,
    cartOpen,
    setCartOpen,
    addToCart,
    cart,
    removeCart,
    quantityIncrement,
    quantityDecrement,
    subtot,
    setCart,
    search,
    setSearch,
  ] = useContext(dataContext);

  const [searchIn, setSearchIn] = useState('');
  const navigate = useNavigate();
  const inputRef = useRef(null);

  useEffect(() => {
    if (search) {
      inputRef.current?.focus();
    }
  }, [search])




  const query = searchIn.trim().toLowerCase();
  const hasQuery = query.length > 0;

  const filterBook = hasQuery ? Books.filter(book => book.title.toLowerCase().includes(query) || book.authorEn.toLowerCase().includes(query) || book.categoryEn.toLowerCase().includes(query)) : [];


  return (
    <div className='backdrop-blur-lg bg-black/10 h-screen fixed inset-0 z-50'>
      <div className='h-[70vh] w-4/5 sm:w-2/3 md:w-[50vw] xl:w-[40vw] bg-white rounded-lg px-4 absolute left-1/2 top-16 -translate-x-1/2 '>
        <FaSearch className='absolute left-7 top-11.5 text-[15px] text-black/40' />
        <RxCross2 onClick={() => {
          setSearch(!search)
        }} className='absolute right-2 top-2 text-lg text-black/70 rounded-full' />
        <form className='mt-6'>
          <input type='text' ref={inputRef} placeholder='Search books...' value={searchIn} onChange={(e) => setSearchIn(e.target.value)} className=' border border-black/5 outline-none mt-2 w-full py-2 text-black/75 tracking-wide rounded-full px-10 '></input>
        </form>
        <div className='mt-2 space-y-6 max-h-[58vh] overflow-auto'>
          {
            !hasQuery && (
              <p className='text-center text-[18px] tracking-wide text-black/50 mt-4'>
                start typing to search books!
              </p>
            )
          }
          {
            hasQuery && filterBook.length > 0 && (
              <div className=''>
                <h3 className='text-xl text-black/80 pb-0 font-bold '>Books</h3>
                <div className='flex flex-col'>
                  {filterBook.map((book) => {
                    const rat = book.rating
                    return (
                      <div onClick={() => {
                        navigate(`/books/details/${book.id}`)
                        setSearch(!search)
                      }} key={book.id} className={`flex bg-white hover:bg-gray-100 transition-transform ease-out duration-100 px-2 py-2  items-center justify-between cursor-pointer`}>
                        <div className='flex items-center gap-3'>
                          <img src={book.image} className='w-16 h-20 object-cover'></img>
                          <div className='flex flex-col'>
                            <p className='text-[14px] text-black/80'>{book.title}</p>
                            <div className='flex items-center gap-1.5'>
                              <div className='flex '>
                                {
                                  Array.from({ length: rat }).map((_, i) => (
                                    <IoIosStar key={i} className='text-yellow-400 text-[13px]' />
                                  ))
                                }
                              </div>
                              <p className='font-medium text-[13px]'>({book.ratingCount})</p>
                            </div>
                            <p className='text-black/70 text-[13px] mt-1'>{book.author}</p>
                          </div>
                        </div>
                        <div className='flex flex-col'>
                          <div className='flex text-[15px] items-center gap-0'>
                            <TbCurrencyTaka className='' />
                            <p className='font-medium'>{book.price.toFixed(2)}</p>
                          </div>
                          {
                            book.originalPrice > 0 && (
                              <div className='flex items-center text-[12px] text-red-600 line-through gap-0'>
                                <TbCurrencyTaka className='' />
                                <p className='font-medium'>{book.originalPrice.toFixed(2)}</p>
                              </div>
                            )
                          }
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          }
          {
            query &&
            filterBook.length === 0 && (
              <p className='text-center text-red-600 font-medium mt-8 '>No resultes found!</p>
            )
          }
        </div>
      </div>

    </div>
  );
};

export default Search;