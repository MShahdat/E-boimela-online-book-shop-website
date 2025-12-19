import React, { useContext } from 'react';
import { RxCross2 } from "react-icons/rx";
import { dataContext } from '../context/Context';


const Video = () => {
  const [, , , video, setVideo] = useContext(dataContext);

  return (
    <div className='backdrop-blur-lg flex items-center justify-center bg-black/10 h-screen fixed inset-0 z-50'>
      <div className='bg-white/40 rounded-2xl h-[300px] sm:h-[400px] w-[400px] sm:w-[560px] relative'>
        <div className='absolute top-2 right-2'>
          <button onClick={() => {
            setVideo(false)
          }}>
            <RxCross2 className='text-2xl md:text-3xl text-black/70 active:text-black' />
          </button>
        </div>
        <div className="flex items-center justify-center h-full w-full">
          <div className="w-full aspect-video px-2">
            <iframe
              className="w-full h-full rounded"
              src="https://www.youtube.com/embed/Wg7i86e4JX0"
              title="শুভ বিবাহবার্ষিকী | Gopal Bhar | Episode - 1214"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Video;