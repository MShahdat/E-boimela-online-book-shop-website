import React, { useContext } from 'react';
import { RxCross2 } from "react-icons/rx";
import { FaMinus, FaPlus } from "react-icons/fa";
import { dataContext } from '../context/Context';
import { toast } from 'react-toastify';
import { TbCurrencyTaka } from "react-icons/tb";
import { Link, useNavigate } from 'react-router-dom';


const Cart = () => {
  const [, , , , , , , cartOpen, setCartOpen, , cart, removeCart, quantityIncrement, quantityDecrement, subtot] = useContext(dataContext);
  console.log(cart);
  console.log(cart.length)

  const navigate = useNavigate()

  return (
    <div className='bg-black/20 backdrop-blur-lg h-screen fixed inset-0 z-50'>
      <div className={`px-4 py-4 flex opacity-0 flex-col justify-between rounded-lg shadow-2xl transform transition-transform duration-500 ease-in-out backdrop-blur-lg bg-white/80 fixed top-16 right-0 xl:right-[12vw] w-full sm:w-[400px] h-[75vh] z-40 ${cartOpen ? 'opacity-100' : ''}`}>
      <RxCross2 onClick={() => {
        setCartOpen(!cartOpen)
      }} className='size-6 absolute right-2 top-2 bg-red-600 text-white rounded-full' />
      <p className='text-2xl font-bold absolute left-1/2 transform -translate-x-1/2 top-6'>My cards</p>
      <div className='overflow-auto mt-12'>
        {cart.length === 0 ?
          (<p className='text-center text-red-600 mt-8'>No Cart Available</p>)
          : (
            cart.map((book, idx) => {
              return (
                <div key={idx} className='flex flex-col justify-between'>
                  <div className={`mt-0 p-1.5 flex items-center justify-between ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"}`}>
                    <div className='flex items-center gap-3'>
                      <img src={book.image} className='w-16 h-18 rounded object-cover'></img>
                      <div className='-mt-1'>
                        <h3 className='text-[14px] line-clamp-1 font-medium text pb-0.5'>{book.title}</h3>
                        <div className='mt-0.5 flex items-center gap-2'>
                          <button
                            onClick={() => {
                              quantityDecrement(book)
                            }}
                            className=' px-0.5 py-0.5 text-xs bg-white font-bold'><FaMinus /></button>
                          <p className=' px-0.5 py-0 text-[15px] font-bold'>{book.quantity}</p>
                          <button
                            onClick={() => {
                              quantityIncrement(book)
                            }}
                            className=' px-0.5 py-0.5 text-xs bg-white font-bold'><FaPlus /></button>
                        </div>
                        <div className='flex items-center'>
                          <p className='font-bold flex items-center gap-0 text-[12px] text-green-700 px-2 '><span className='text-[15px]'><TbCurrencyTaka/></span> {book.price.toFixed(2)}</p>

                          {
                            book.originalPrice &&
                            <p className='font-bold text-[12px] text-red-600 flex items-center line-through px-2 '> <span className='text-[15px]'><TbCurrencyTaka/></span> {book.originalPrice.toFixed(2)}</p>
                          }

                        </div>
                      </div>
                    </div>
                    <div>
                      <RxCross2
                        onClick={() => {
                          removeCart(book)
                          toast.success('Item remove successfully!')
                        }}
                        className='size-5 text-red-600' />
                    </div>
                  </div>

                </div>
              )
            })
          )
        }
      </div>
      <div className='flex flex-col gap-2'>

        <div className={`mt-2 px-2 flex items-center justify-between`}>
          <p className='text-md font-medium text-gray-600'>Subtotal</p>
          <p className='font-medium text-green-700 flex items-center'><span><TbCurrencyTaka/></span> {subtot.toFixed(2)}</p>
        </div>


        <button
        onClick={() => {
          console.log('clicked')
          setCartOpen(!cartOpen)
          navigate('/checkout')
        }}
        disabled = {cart.length === 0}
        className={`text-center py-2 rounded-lg active:bg-blue-900 bg-blue-950 w-full text-white font-bold text-[18px] ${cart.length === 0 ? 'cursor-not-allowed' : ''}`}>Checkout</button>

        <button onClick={() => {
          setCartOpen(!cartOpen)
        }} className='text-center py-2 bg-gray-300 active:bg-gray-400 rounded-lg w-full text-black font-bold text-[18px]'>Close</button>
      </div>

    </div>
    </div>
  );
};

export default Cart;