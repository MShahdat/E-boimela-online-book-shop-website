import React, { useContext } from 'react';
import { IoIosStar } from "react-icons/io";
import { TbCoinTakaFilled } from "react-icons/tb";
import { FaShoppingCart  } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { dataContext } from '../context/Context';
import { toast } from 'react-toastify';
import { IoIosCheckmarkCircle } from "react-icons/io";


const BookCard = (props) => {
  // console.log(props.books)

  const [, , , , , , , , , addToCart, cart] = useContext(dataContext);


  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 lg:gap-6 space-y-4'>
      {
        props.books.map((book, idx) => {
          const rat = Math.ceil(book.rating);
          const isAdded = cart.some(item => item.id === book.id);
          // console.log(rat)
          return(
            <Link to={`/books/details/${book.id}`} key={idx} className='group  bg-white cursor-pointer p-2 shadow-2xl h-110 sm:h-100 rounded-lg relative hover:scale-102 transform duration-300'>
              {
                book.discount &&
                <div className='absolute bg-red-600 px-2 text-white text-[14px] font-medium py-0.5 right-2 top-4 rounded-l-2xl'>
                {book.discount} OFF
              </div>
              }
              {
                book.price == 0 &&
                <div className='absolute bg-red-600 px-2 text-white text-[14px] font-medium py-0.5 right-2 top-4 rounded-l-2xl'>
                {book.discount} Free
              </div>
              }
              <img src={book.image} className='w-full h-66  object-cover rounded-lg'></img>

              <div onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (!isAdded) {
                  console.log('clicked'),
                  addToCart(book)
                  toast.success('cart added successfull!');
                }
              }}
              className={`absolute top-58 left-2 right-2 ${isAdded ? 'bg-orange-700' : ''} bg-orange-600 text-white py-2 text-[16px] font-medium`}>
                  <div className='flex flex-col items-center justify-center'>
                    <div className='flex items-center gap-2'>
                    {isAdded ? <IoIosCheckmarkCircle  /> : <FaShoppingCart />}
                    <p>{isAdded ? 'Added' : 'Add to Cart'}</p>
                  </div>
                  </div>
              </div>
              <h3 className='text-[18px] mt-2 font-medium text-black line-clamp-2 leading-tighttext-black'>{book.title}</h3>
              <p className='text-[15px] mt-2 text-black/60 leading-tight line-clamp-2'>{book.author}</p>
              <div className='absolute bottom-2 left-2 right-2'>
                <div className=' flex flex-col sm:flex-row sm:items-center justify-between'>
                <div className='flex items-center gap-0.5'>
                  <div className='flex '>
                    {
                    Array.from({length:rat}).map((_, i) => (
                      <IoIosStar key={i} className='text-yellow-400 text-[14px] sm:text-[14px]' />
                    ))
                  }
                  </div>
                  <p className='font-medium text-black text-[14px]'>({book.ratingCount})</p>
                </div>
                <div className='flex items-center gap-1'>
                  <div className='flex items-center gap-0.5'>
                  <TbCoinTakaFilled className='text-[16px] text-green-700'/>
                  <p className='font-medium text-green-700 sm:text-[17px]'>{book.price.toFixed(2)}</p>
                </div>
                {
                  book.originalPrice > 0 && 
                  <div className='flex items-center gap-0.5 mt-1 sm:mt-0.5'>
                  <p className='font-medium text-red-600 line-through text-[12px]'>{book.originalPrice.toFixed(2)}</p>
                </div>
                }
                </div>
              </div>
              </div>
            </Link>
          )
        })
      }
    </div>
  );
};

export default BookCard;