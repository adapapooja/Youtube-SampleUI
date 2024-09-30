import React from 'react';
import create_video from '../../assets/create_video.png';
import mike from '../../assets/mike.png';
import search from '../../assets/search.jpg';
import youtube from '../../assets/youtube.png';
import notification from '../../assets/notification.jpg';
import profile from '../../assets/profile.png';

function Center(props) {
    return (
        <div className='fixed top-0 left-0 right-0 bottom-0 z-50'>
        <div className='flex flex-row pt-[10px] items-center'>
            <div className='flex flex-row ml-[15px]'>
            <img src={youtube} className='w-[9%]'></img>
            <p className='text-[white] '>Youtube<sup className='pl-[5px] text-[grey]'>BD</sup></p>
            </div>

            <div className='flex flex-row ml-[25px]'>
                <input type="text" value="Search" className=' border-[2px] border-[grey] w-[550px] bg-black text-[grey] hover:border-[none] ml-[15px] pl-[10px] rounded-full'></input>
                <img src={search} className='w-[3%] pl-[5px]'></img>
                <img src={mike} className='w-[20px] ml-[50px] h-[20px]'></img>
            </div>

            <div className=' flex flex-row items-center'>
                <img src={create_video} className='w-[40px] h-[30px]'></img>
                <img src={notification} className='w-[15px] h-[25px]'></img>
                <img src={profile} className='w-[25px]'></img>

            </div>
        </div>
        </div>
    );
}

export default Center;
