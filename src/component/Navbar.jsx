import React, { useContext, useState,useEffect } from 'react';
import { FaHeart } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link, NavLink } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { dataContext } from '../context/Context';
import { IoMdArrowRoundForward } from "react-icons/io";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { IoSunnySharp } from "react-icons/io5";
import { IoMoonSharp } from "react-icons/io5";


const Navbar = () => {

  const [name, open, setOpen, , , , , cartOpen, setCartOpen, , cart, , , , , , search, setSearch] = useContext(dataContext);
  const [facilityOpen, setFacilityOpen] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  const handleTheme = ()=> {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
      if(theme === 'dark'){
        document.documentElement.classList.add('dark');
        console.log('dark')
        localStorage.setItem('theme', 'dark');
      }else{
        console.log('light')
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light')
      }
    }, [theme])

  const navItem = [
    { path: '/', link: 'Home' },
    { path: '/genres', link: "Genres" },
    { path: '/authors', link: 'Author' },
    { path: '/publishers', link: 'Publishers' },
    {
      path: '/publish', link: 'Pages',
      children: [
        { path: '/publish', link: 'Publish' },
        { path: '/recharge-balance', link: 'Recharge' },
        { path: '/refund', link: 'Refund Policy' },
      ]
    },

  ]

  return (
    <div className='bg-[#090224] text-white shadow-2xl sticky left-0 top-0 z-50 transition-all duration-500'>
      <nav className='max-w-6xl px-4 py-4 mx-auto'>
        <div className=' flex items-center justify-between'>
          <Link to={'/'} className='text-2xl sm:text-3xl font-bold '>
            <p>{name}</p>
          </Link>
          <div className='flex items-center gap-4 lg:gap-6'>
            {navItem.map((item, idx) => {
              if (item.children) {
                return (
                  <div key={idx} className='relative group hidden md:block'>
                    <NavLink
                      to={item.path}
                      className={({ isActive }) =>
                        `flex items-center gap-0.5 text-[18px] font-semibold tracking-[1px] 
            ${isActive ? 'text-orange-600 font-bold underline' : ''}`
                      }
                    >
                      <h2>{item.link}</h2>
                      <IoIosArrowDown className='mt-1 size-5' />
                    </NavLink>

                    {/* Dropdown */}
                    <div className='absolute left-0 top-full bg-white shadow-md rounded
                       opacity-0 invisible group-hover:opacity-100 group-hover:visible
                       transition-all duration-300 w-40'>
                      {item.children.map((child, cidx) => (
                        <NavLink
                          key={cidx}
                          to={child.path}
                          className={({ isActive }) => `block px-4 py-2 text-[16px] font-medium hover:bg-gray-100 text-black ${isActive ? 'text-orange-600 underline' : ''}`}
                        >
                          {child.link}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )
              }

              return (
                <NavLink
                  key={idx}
                  to={item.path}
                  className={({ isActive }) =>
                    `hidden md:block text-[18px] font-semibold tracking-[1px] 
        ${isActive ? 'text-orange-600 font-bold underline' : ''}`
                  }
                >
                  {item.link}
                </NavLink>
              )
            })}

          </div>

          <div className='flex items-center gap-4 md:gap-4'>
            <button onClick={() => {
              handleTheme();
            }}>
              {theme === 'dark' ? <IoSunnySharp className='size-7' /> : <IoMoonSharp className='size-7' />}
            </button>

            <div onClick={() => {
              setSearch(!search);
            }} className=''>
              <FaSearch className='text-[18px] sm:text-xl font-medium' />
            </div>
            <div onClick={() => {
              setCartOpen(!cartOpen)
            }} className='relative cursor-pointer'>
              {
                cart.length >= 1 &&
                <p className='absolute left-3 bottom-2 text-[12px] font-bold text-white rounded-full px-1.5 bg-red-600 '>{cart.length}</p>
              }
              <FaShoppingCart className='text-lg' />
            </div>
            <div onClick={() => {
              setOpen(!open)
            }} className='block md:hidden border-2 rounded border-white/30 px-1'>
              {open ? <RxCross2 className='text-2xl font-bold mt-0' /> : <IoMdMenu className='text-2xl font-bold mt-0' />}
            </div>
          </div>
        </div>
      </nav>


      {/* mobile part */}
      <div className={`w-1/2 sm:w-2/5 fixed top-17 right-0 md:hidden bg-white dark:bg-black text-black/80 dark:text-white shadow-2xl px-4 transform transition-transform duration-500 ${open ? 'translate-x-0' : 'translate-x-full'} py-4`}>
        <div className='flex flex-col gap-4 sm:px-4 mt-0 pt-0  pb-4'>
          {navItem.map((item, idx) => {
            if (item.children) {
              return (
                <div key={idx}>

                  <button
                    onClick={() => setFacilityOpen(!facilityOpen)}
                    className='text-lg font-semibold w-full text-left flex gap-1 items-center hover:scale-101 duration-500 transform'
                  >
                    {item.link}
                    <div>
                      {facilityOpen ? <IoIosArrowUp className='size-6 mt-0.5' /> : <IoIosArrowDown className='size-6 mt-0.5' />}
                    </div>
                  </button>


                  {facilityOpen && (
                    <div className='mt-1.5 bg-white dark:bg-black border border-white/20 rounded shadow flex flex-col py-2 gap-0'>
                      {item.children.map((child, cidx) => (
                        <NavLink
                          key={cidx}
                          to={child.path}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) => `hover:scale-101 duration-500  transform text-[18px] text-black/70 dark:text-white font-medium px-4 py-1 ${isActive ? 'text-orange-600 font-bold underline' : ''}`}
                        >
                          {child.link}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <NavLink
                key={idx}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `text-lg hover:scale-101 duration-500 transform font-semibold ${isActive ? 'text-orange-600 underline' : ''}`}
              >
                {item.link}
              </NavLink>
            );
          })}
        </div>

        <div onClick={() => {
          setOpen(!open)
        }} className='mt-2 cursor-pointer text-center text-[16px] py-1 bg-orange-600 text-white font-semibold rounded w-full'>
          <div className='flex items-center justify-center gap-1'>
            <h3>Join Us</h3>
            <IoMdArrowRoundForward />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;