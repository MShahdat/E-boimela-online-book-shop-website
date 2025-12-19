import React, { useContext, useState } from 'react';
import { TbCurrencyTaka } from "react-icons/tb";
import { Link } from 'react-router';
import { MdMobileScreenShare } from "react-icons/md";
import { dataContext } from '../context/Context';

const Recharge = () => {
    const [amount, setAmount] = useState('');
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [agree, setAgree] = useState(false);

    const [, , , video, setVideo, , setPayment] = useContext(dataContext);


    const handleAmountClick = (value) => {
        setAmount(value);
        setSelectedAmount(value);
    };

    const handleInputChange = (e) => {
        setAmount(e.target.value);
        setSelectedAmount(null);
    };

    const handleRecharge = () => {
        if (agree && amount) {
            alert(`Recharging Tk ${amount}`);
        }
    };

    return (
        <div className='bg-white dark:bg-black dark:text-white'>
            <div className=' px-4 pt-8 pb-4 mx-auto max-w-3xl'>
            <div className='flex justify-between items-start md:items-center mb-4'>
                <h1 className="text-2xl sm:text-3xl font-bold mb-4 md:mb-0">Recharge</h1>
                <div className='flex flex-col items-center'>
                    <p className='text-sm md:text-base font-bold'>Total</p>
                    <div className='flex items-center dark:text-white text-blue-900'>
                        <TbCurrencyTaka className='w-6 h-6 sm:w-8 sm:h-8'/>
                        <p className='text-lg sm:text-2xl font-bold'>{amount || 0}</p>
                    </div>
                </div>
            </div>

            <div>
                <p className='text-md md:text-lg font-bold'>Account Information</p>
                <p className='font-bold text-md md:text-lg py-3'>Account ID</p>
                <input 
                    className='border border-black/30 dark:border-white/30 px-3 outline-none rounded-lg py-1.5 w-full'
                    type='text'
                    placeholder='Enter the Account ID (e.g. ACC23456)'
                />
                <div className='pt-2'>
                    <button onClick={() => {
                        console.log('clicked')
                        setVideo(true)
                    }}>
                        <p className='font-bold text-red-600 active:text-red-700 text-base'>
                            Learn how to find your account ID
                        </p>
                    </button>
                </div>
            </div>

            <div className='pt-5'>
                <p className='text-md md:text-lg font-bold'>Amount</p>
                <input 
                    className='border border-black/30 dark:border-white/30 outline-none px-4 rounded-lg py-1.5 w-full'
                    type='number' 
                    value={amount}
                    onChange={handleInputChange}
                    placeholder='Enter the amount'
                />
                <div className='py-4 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6'>
                    {[50, 100, 300, 500, 1000].map((value) => (
                        <button 
                            key={value}
                            onClick={() => handleAmountClick(value)}
                            className={`border border-black/30 px-4 sm:px-6 font-bold text-black/70 dark:text-white dark:border-white/30 py-1 rounded-lg 
                                ${selectedAmount === value ? 'bg-blue-900 text-white' : ''}`}
                        >
                            {value}
                        </button>
                    ))}
                </div>
            </div>

            <div>
                <h3 className='text-md md:text-lg font-bold py-3'>Payment Method</h3>
                <div className='pb-5 border rounded-lg px-4 sm:px-5 py-3 w-full shadow-xl'>
                    <Link onClick={() => {
                        setPayment(true)
                    }}>
                        <div className='flex items-start sm:items-center gap-2'>
                            <MdMobileScreenShare className='w-6 h-6 sm:size-7'/>
                            <div>
                                <p className='font-bold text-sm sm:text-base'>Local Payment</p>
                                <p className='text-gray-700 dark:text-white/80 text-xs sm:text-sm'>
                                    bKash, Nagad, Rocket, Credit, and Debit cards
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className='flex items-center gap-2 py-6'>
                <input 
                    type="checkbox"
                    checked={agree}
                    onChange={() => setAgree(!agree)}
                    className='w-4 h-4 border-2'
                />
                <span className='flex flex-wrap gap-1 text-sm sm:text-base'>
                    I agree the 
                    <Link to={'/terms&conditions'}>
                        <p className='font-bold text-blue-900 dark:text-orange-600 hover:scale-101 transform duration-300 '>
                            Terms of Service
                        </p>
                    </Link> 
                    and 
                    <Link to={'/policy'}>
                        <p className='font-bold text-blue-900 dark:text-orange-600 hover:scale-101 transform duration-300 '>
                            Privacy Policy
                        </p>
                    </Link>
                </span>
            </div>

            <div className={`font-bold border text-center text-base sm:text-lg py-2 sm:py-1 bg-black dark:bg-white dark:text-black text-white rounded-2xl ${(!agree || !amount) ? 'opacity-50 cursor-not-allowed' : ''}`}>
                <button onClick={handleRecharge} disabled={!agree || !amount}>
                    Recharge <span>tk {amount || 0}</span>
                </button>
            </div>

        </div>
        </div>
    );
};

export default Recharge;
