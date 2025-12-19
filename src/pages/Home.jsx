import React from 'react';
import Banner from '../component/Banner';
import Islamic from '../component/home/Islamic';
import New from '../component/home/New.jsx';
import Trending from '../component/home/Trending';
import Free from '../component/home/Free';
import Friction from '../component/home/Friction.jsx';
import Thriller from '../component/home/Thriller.jsx';
import Scientific from '../component/home/Scientific.jsx';
import Academic from '../component/home/Academic.jsx';
import Career from '../component/home/Career.jsx';
import Hom from '../component/home/Hom.jsx';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <New></New>
      <Hom></Hom>
      {/* <Trending></Trending>
      <Islamic></Islamic>
      <Free></Free>
      <Career></Career>
      <Friction></Friction>
      <Thriller></Thriller>
      <Scientific></Scientific>
      <Academic></Academic> */}
    </div>
  );
};

export default Home;