import React from 'react';

const Refund = () => {
    return (
        <div className='bg-gray-50 dark:bg-black dark:text-white'>
            <div className=' px-4 py-8 xl:px-30 mx-auto max-w-7xl'>
            <div className='space-y-2'>
                <h2 className='font-marko-one text-xl md:text-3xl font-bold '>Return and Refunds Policy</h2>
                <p className='text-[16px] dark:text-white/95 tracking-wide text-gray-800'>Thank your for shopping at Boitoi.</p>
                <p className='text-[16px] tracking-wide leading-relaxed dark:text-white/80 text-black/80'>Please read this policy carefully. This is the Return and Refund Policy of Boitoi.</p>
            </div>
            <div className='space-y-2 text-black/80 dark:text-white/90'>
                <h1 className='text-lg text-black md:text-2xl font-bold pt-8'>Digital Products</h1>
                <p className='text-[16px] text-black/80 tracking-wide leading-relaxed'>We sell digital products, so you do not have to return anything if you wish to get a refund.</p>
                <p className=''>We issue refunds for digital products within 3 days of the original purchase of the product.</p>
                <p className='text-lg'>Refunds may be issued only under certain circumstance.</p>
                <div className='px-10'>
                    <li className=''>You're unable to read our eBook on your device</li>
                    <li className=''>The eBook name/cover is different than the actual content of the book</li>
                </div>
                <p className=''>please not that eBook are digital products. To avoid fraud and invalid claims, we may refuse to provide a refund without showing any reason.</p>
                <p className=''>We recommend contacting us for assistance if you experience any issues receiving or download our products.</p>
            </div>
            <div className='space-y-2'>
                <h3 className='text-lg md:text-2xl font-bold pt-6'>Contact Us</h3>
                <p className='text-black/80 dark:text-white/70'>if you have any questions about our Return and Refunds Policy, please contact us:</p>
                <div className='px-10'>
                    <li className=' font-semibold'><span className='text-blue-900 dark:text-orange-600'>By email: shahdat2504@gmail.com</span></li>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Refund;