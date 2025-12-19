import { useState } from 'react';
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Link } from 'react-router';
import { FaArrowRight } from "react-icons/fa";
import { HiOutlineSearch } from 'react-icons/hi';
import { MdLibraryBooks } from "react-icons/md";

const faqs = [
  {
    question: "How can I publish my book?",
    answer: "You can easily publish your book by visiting our publishing platform."
  },
  {
    question: "How long does the book publishing process take?",
    answer: "Usually, your book can be published within a few weeks."
  },
  {
    question: "Is there any information about the contract between the author and the publisher?",
    answer: "Yes, the detailed terms and conditions of the contract are available on our website."
  },
  {
    question: "Where can I find information about publishing costs or fees?",
    answer: "All cost-related information is clearly mentioned in our publishing policy."
  },
  {
    question: "How can I properly design a book cover?",
    answer: "You can create a beautiful cover using our tools or with the help of professional graphic designers."
  },
  {
    question: "Which forms do I need to fill out to publish a book?",
    answer: "The required forms can be downloaded from our website."
  },
  {
    question: "Can I check my publishing status?",
    answer: "Yes, you can view your publishing status by logging into your profile."
  }
];

const Publish = () => {
    const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
    return (
      <div className='bg-gray-50 dark:bg-black dark:text-white'>
        <div className=" min-h-screen flex flex-col items-center px-4 py-8 sm:px-6 md:px-8 lg:px-16 xl:px-20 max-w-7xl mx-auto">
   
        <h2 className="text-2xl sm:text-3xl xl:text-4xl font-semibold text-center mt-4 mb-4">How can we help your?</h2>

        <div className="flex items-center justify-center w-full mt-4 mb-10">
            <div className="w-full max-w-2xl relative">
                <input
                    type="text"
                    placeholder="Find your answer"
                    className="w-full py-3 px-5 pr-12 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <HiOutlineSearch className="absolute right-4 top-4 text-gray-500 text-xl" />
            </div>
        </div>
     

        {/* FAQ Section */}
        <div className="w-full max-w-2xl bg-white rounded-xl shadow p-4 sm:p-6 md:p-8">
         
              <div className='flex items-center gap-3 mb-6' >
                <MdLibraryBooks className='size-10 text-black' />
                <div>
                    <h2 className='text-xl font-black text-black/90 tracking-wide'>Publication</h2>
                    <p className='text-[16px] tracking-wide text-black/80'>Do you want to publish an eBook? Our platform is undoubtedly one of the most attractive publishing solutions.।</p>
                </div>
            </div>
            

            {faqs.map((faq, index) => (
               
                  <div
                key={index}
                className="shadow-md px-4 py-6"
                >
                <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left flex justify-between items-center focus:outline-none"
                >
                    <span className="text-gray-800 ">{faq.question}</span>
                    <svg
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                        openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>
                {openIndex === index && (
                    <div className="py-2 text-gray-600 mt-4">{faq.answer}</div>
                )}
                </div>
              
            ))}
        </div>
        <div className="flex flex-col items-center mt-10">
            <div className="flex gap-4 mb-4 space-y-4 ">
                <a href='https://play.google.com/store/apps'>
                    <div className='flex items-center dark:bg-white bg-black text-white dark:text-black font-bold px-3 py-2 rounded-lg hover:scale-105 transform duration-300  transition'>
                        <FaGooglePlay />
                        <span className='px-2 text-sm'>Google Play</span>
                    </div>
                </a>
                <a href='https://www.apple.com/app-store/'>
                    <div className='flex items-center dark:bg-white dark:text-black bg-black text-white font-bold px-3 py-2 rounded-lg hover:scale-105 transform duration-300  transition'>
                        <FaApple />
                        <span className='px-2 text-sm'>App Store</span>
                    </div>
                </a>
            </div>
            {/* <div className="flex items-center gap-4 text-sm font-bold text-gray-700 ">
                <Link to={'/help&support'} className='hover:scale-105 transform duration-300 hover:text-gray-900'>
                    <p>সাপোর্ট শুরু</p>
                </Link>
                <Link to={'/'}>
                    <div className='flex items-center gap-1 hover:scale-105 transform duration-300 hover:text-gray-900'>
                        <p>মেইন সাইট</p>
                        <FaArrowRight />
                    </div>
                </Link>
            </div> */}
        </div>
    </div>
      </div>
  );
};

export default Publish;