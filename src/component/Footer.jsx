import React from 'react';
import { Link } from 'react-router'; // Correct router import
import { LuDownload, LuCopyright } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className='bg-[#080419] text-white'>
      <div className='max-w-6xl mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 space-y-8'>
          <div className=''>
            <h2 className='text-3xl font-bold'>E-boimela</h2>
            <p className='mt-4 text-white/70 text-[16px] tracking-wide'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur quia ex atque sunt deleniti distinctio sapiente.</p>
            <div className='mt-4 flex items-center gap-2'>
              <div className='bg-orange-600 w-9 h-9 rounded-full flex flex-col items-center justify-center'>
                <FaFacebookF className='text-xl' />
              </div>
              <div className='bg-orange-600 w-9 h-9 rounded-full flex flex-col items-center justify-center'>
                <FaTwitter className='text-xl' />
              </div>
              <div className='bg-orange-600 w-9 h-9  rounded-full flex flex-col items-center justify-center'>
                <FaInstagram className='text-2xl' />
              </div>
              <div className='bg-orange-600 w-9 h-9  rounded-full flex flex-col items-center justify-center'>
                <IoLogoYoutube className='text-xl' />
              </div>
            </div>
          </div>

          <div className='tracking-wide'>
            <h1 className='font-semibold text-xl uppercase'>Quick Links</h1>
            <div className='mt-6 flex flex-col gap-2 text-white/70'>
              <Link to='/recharge-balance' className=''>
                Recharge Balance
              </Link>
              <Link to='/publish' className=' '>
                Publish on Boitoi
              </Link>
              <Link to='/policy' className=''>
                Privacy Policy
              </Link>
              <Link to='/help&support' className=''>
                Helps & Support
              </Link>
            </div>
          </div>

          <div>
            <p className=' text-xl font-semibold uppercase'>Download Our Apps</p>
            <div className='mt-6 flex flex-col gap-4'>
              <Link>
                <div className='flex items-center gap-5 bg-black text-white justify-center w-55 py-1.5 rounded-lg hover:scale-105 transform duration-300 hover:bg-blue-900 transition'>
                  <LuDownload className='size-7' />
                  <div className='flex flex-col leading-4'>
                    <span className='text-sm'>Download on the</span>
                    <span className='text-base font-bold'>Google Play</span>
                  </div>
                </div>
              </Link>
              <Link>
                <div className='flex items-center gap-5 bg-black text-white justify-center w-55 py-1.5 rounded-lg hover:scale-105 transform duration-300 hover:bg-blue-900 transition'>
                  <LuDownload className='size-7' />
                  <div className='flex flex-col leading-4'>
                    <span className='text-sm'>Download on the</span>
                    <span className='text-base font-bold'>App Store</span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div>
            <h2 className=' text-xl font-semibold uppercase'>Newsletter</h2>
            <p className='mt-4 tracking-wide text-white/70'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique, recusandae.</p>
            <form className='mt-6'>
              <input type='text' placeholder='example@gmail.com' className='px-4 py-2 bg-white text-black w-full rounded outline-none'></input>
              <button className='mt-2 text-center py-1.5 w-full bg-orange-600 rounded active:bg-orange-700
               text-white text-[16px] font-medium'>Subscribe</button>
            </form>
          </div>
        </div>
      </div>


      <div className='border-t border-white/25'></div>
      <p className='text-center py-3 text-[16px] text-white/70'>Copyright ©2025 All rights reserved. This template is made by Shahdat</p>
    </div>

  );
};

export default Footer;
