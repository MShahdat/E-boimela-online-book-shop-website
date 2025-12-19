import React, { useContext } from 'react';
import Footer from '../src/component/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from './component/Navbar';
import Video from './component/Video';
import { dataContext } from './context/Context';
import Payment from './component/Payment';
import Cart from './component/Cart';
import { ToastContainer, Zoom } from 'react-toastify';
import Search from './component/Search';
import Top from './scroll/Top';
import ScrollToTop from './scroll/ScrollTop';

const App = () => {

  const [, , , video, , payment, , cartOpen, setCartOpen, , , , , , , , search, setSearch] = useContext(dataContext)
  return (
    <div>
      <Top></Top>
      <ScrollToTop></ScrollToTop>
      <Navbar></Navbar>
      {
        video &&
        <Video></Video>
      }
      {
        payment &&
        <Payment></Payment>
      }
      {
        search && 
        <Search></Search>
      }
      {
        cartOpen &&
        <Cart></Cart>
      }
      <Outlet></Outlet>
      <Footer></Footer>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
    </div>
  );
};

export default App;