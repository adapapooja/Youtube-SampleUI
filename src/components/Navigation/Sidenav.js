import React, { useState } from 'react';
import home from '../../assets/home_icon.jpg';
import hamburger from '../../assets/hamburger.png';
import profile from '../../assets/profile.png'

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);


  return (
    <div className={`flex flex-col h-screen bg-[rgb(32,32,32)] p-4 mt-[60px] ${isOpen ? 'w-64  overflow-y-auto scrollbar scrollbar-thumb-gray-500 scrollbar-track-gray-1000 z-10' : 'w-20'} transition-all duration-300`}>
      <button
        className="text-white mb-4 focus:outline-none"
        onClick={toggleNavbar}
      >
        {isOpen ? (

          <img src={hamburger} className='w-[25px]'></img>
        ) : (

          <img src={hamburger} className='w-[25px]'></img>
        )}
      </button>

      <ul className="space-y-4">
        <div>
          {isOpen && <li className="text-white">
            <div className='flex flex-row pt-[20px]'>
              <img src={home} className='w-[9%] ml-[20px] mr-[10px]'></img>
              <h1>Home</h1>

            </div>
          </li>}
          {isOpen && <li className="text-white">
            <div className='flex flex-row pt-[20px]'>
              <img src={home} className='w-[9%]  ml-[20px] mr-[10px]'></img>
              <h1>Shorts</h1>

            </div></li>}
          {isOpen && <li className="text-white"><div className='flex flex-row pt-[20px]'>
            <img src={home} className='w-[9%] mr-[10px] ml-[20px]'></img>
            <h1>Subscriptions</h1>

          </div></li>}
        </div>
        {isOpen && <hr></hr>}

        {isOpen && <li className="text-white"><div className='flex flex-row'>
          <img src={home} className='w-[9%] mr-[10px] ml-[20px]'></img>
          <h1>Library</h1>

        </div></li>}
        {isOpen && <li className="text-white"><div className='flex flex-row'>
          <img src={home} className='w-[9%] mr-[10px] ml-[20px]'></img>
          <h1>Your Videos</h1>

        </div></li>}
        {isOpen && <li className="text-white"><div className='flex flex-row'>
          <img src={home} className='w-[9%] mr-[10px] ml-[20px]'></img>
          <h1>Watch Later</h1>

        </div></li>}
        {isOpen && <li className="text-white"><div className='flex flex-row'>
          <img src={home} className='w-[9%] mr-[10px] ml-[20px]'></img>
          <h1>History</h1>

        </div></li>}
        {isOpen && <li className="text-white"><div className='flex flex-row'>
          <img src={home} className='w-[9%] mr-[10px] ml-[20px]'></img>
          <h1>Liked Videos</h1>
        </div></li>}
        {isOpen && <hr></hr>}
        <div>
          {isOpen && <h1 className='text-white pl-[20px]'>Subscriptions</h1>}
          {isOpen && <li className='text-white'><div className='flex flex-row mt-[20px]'>
            <img src={profile} className='w-[9%] mr-[10px] ml-[20px]'></img>
            <h1>Pooja Adapa</h1></div></li>}
          {isOpen && <li className='text-white'><div className='flex flex-row  mt-[20px]'>
            <img src={profile} className='w-[9%] mr-[10px] ml-[20px]'></img>
            <h1>Bhavy Sri Sanku</h1></div></li>}
          {isOpen && <li className='text-white'><div className='flex flex-row  mt-[20px]'>
            <img src={profile} className='w-[9%] mr-[10px] ml-[20px]'></img>
            <h1>Praveen Durvesula</h1></div></li>}
          {isOpen && <li className='text-white'><div className='flex flex-row mt-[20px]'>
            <img src={profile} className='w-[9%] mr-[10px] ml-[20px]'></img>
            <h1>Subhakar buddana</h1></div></li>}
          {isOpen && <li className='text-white'><div className='flex flex-row mt-[20px]'>
            <img src={profile} className='w-[9%] mr-[10px] ml-[20px]'></img>
            <h1>Pooja Adapa</h1></div></li>}
          {isOpen && <li className='text-white'><div className='flex flex-row mt-[20px]'>
            <img src={profile} className='w-[9%] mr-[10px] ml-[20px]'></img>
            <h1>Surekha Dasari</h1></div></li>}

        </div>

      </ul>
    </div>
  );
};

export default SideNavbar;
