
import { FaBook, FaMoneyCheckAlt, FaUser } from 'react-icons/fa';
import { HiOutlineSearch } from 'react-icons/hi';
import { PiBookOpenTextLight } from "react-icons/pi";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import { Link } from 'react-router';
import { FaPen } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Help = () => {
 const cards = [
  {
    icon: <FaBook className="text-2xl" />,
    title: "Publishing",
    desc: "Want to know how to publish a book? You will find detailed guidelines here."
  },
  {
    icon: <FaMoneyCheckAlt className="text-2xl" />,
    title: "Payment",
    desc: "Learn how to make payments or request refunds."
  },
  {
    icon: <FaUser className="text-2xl" />,
    title: "Account & Login",
    desc: "Get detailed information about your account and login."
  },
  {
    icon: <FaPen className="text-2xl" />,
    title: "eBook / Story Writing",
    desc: "Learn how to write and publish an eBook or a story."
  },
  {
    icon: <PiBookOpenTextLight className="text-2xl" />,
    title: "Reading",
    desc: "Find out how to read books and what features are available."
  }
];


  return (
    <div className='bg-white dark:bg-black'>
      <div className=" min-h-screen px-4 md:px-8 xl:px-32 py-8 max-w-7xl mx-auto">

        <h2 className="text-3xl md:text-3xl xl:text-4xl font-semibold text-center mt-4 mb-4">How can we help you?</h2>
      <div className="flex items-center justify-center w-full mt-4">
        <div className="w-full max-w-2xl relative">
          <input
            type="text"
            placeholder="Find your answer"
            className="w-full py-3 px-5 pr-12 text-black dark:text-white rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <HiOutlineSearch className="absolute right-4 top-4  text-gray-500 text-xl" />
        </div>
      </div>



        <div className="py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {cards.map((card, index) => (
          <div key={index} className="bg-white shadow border border-gray-200 p-6 rounded-xl hover:shadow-lg hover:shadow-blue-900 transition">
            <div className="flex items-center gap-4">
              <div>{card.icon}</div>
              <div>
                <h3 className="font-semibold text-lg mb-1">{card.title}</h3>
                <p className="text-gray-600 text-sm">{card.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="flex flex-col items-center mt-10">
        <div className="flex gap-4 mb-4 space-y-4 ">
            <a href='https://play.google.com/store/apps' > 
                <div className='flex items-center bg-black dark:bg-white dark:text-black text-white font-bold px-3 py-2 rounded-lg hover:scale-105 transform duration-300 transition'>
                    <FaGooglePlay />
                    <span className='px-2 text-sm'>Google Play</span>
                </div>
            </a>
            <a href='https://www.apple.com/app-store/'>
                <div className='flex items-center bg-black dark:text-black dark:bg-white text-white font-bold px-3 py-2 rounded-lg hover:scale-105 transform duration-300  transition'>
                    <FaApple />
                    <span className='px-2 text-sm'>App Store</span>
                </div>
            </a>
        </div>
        {/* <div className="flex items-center gap-4 text-sm font-bold text-gray-700 ">
            <Link to={'/helps'} className='hover:scale-105 transform duration-300 hover:text-gray-900'>
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

export default Help;
