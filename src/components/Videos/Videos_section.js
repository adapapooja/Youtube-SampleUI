import React from 'react';

function Videos(props) {
    return (
        <div >
            <div>
                <div className="pl-[25px] overflow-hidden pt-[60px] fixed z-50">
                    <ul className="p-2 overflow-hidden border-t border-b border-[#474747]">
                        <li className="float-left px-4 py-2 bg-[#383838] text-white ml-2 rounded-full list-none border border-[#4e4e4e] text-sm font-arial">All</li>
                        <li className="float-left px-4 py-2 bg-[#383838] text-white ml-2 rounded-full list-none border border-[#4e4e4e] text-sm font-arial">Computer Programming</li>
                        <li className="float-left px-4 py-2 bg-[#383838] text-white ml-2 rounded-full list-none border border-[#4e4e4e] text-sm font-arial">Motivation</li>
                        {/* <li className="float-left px-4 py-2 bg-[#383838] text-white ml-2 rounded-full list-none border border-[#4e4e4e] text-sm font-arial">Css</li> */}
                        <li className="float-left px-4 py-2 bg-[#383838] text-white ml-2 rounded-full list-none border border-[#4e4e4e] text-sm font-arial">Telegu Songs</li>
                        <li className="float-left px-4 py-2 bg-[#383838] text-white ml-2 rounded-full list-none border border-[#4e4e4e] text-sm font-arial">Courses</li>
                        <li className="float-left px-4 py-2 bg-[#383838] text-white ml-2 rounded-full list-none border border-[#4e4e4e] text-sm font-arial">Websites</li>
                        <li className="float-left px-4 py-2 bg-[#383838] text-white ml-2 rounded-full list-none border border-[#4e4e4e] text-sm font-arial">Linux</li>
                        <li className="float-left px-4 py-2 bg-[#383838] text-white ml-2 rounded-full list-none border border-[#4e4e4e] text-sm font-arial">Web Development</li>
                        <li className="float-left px-4 py-2 bg-[#383838] text-white ml-2 rounded-full list-none border border-[#4e4e4e] text-sm font-arial">Web Design</li>
                        <li className="float-left px-4 py-2 bg-[#383838] text-white ml-2 rounded-full list-none border border-[#4e4e4e] text-sm font-arial">Photoshop</li>
                    </ul>
                </div>
            </div>
            <div>
                <div className='flex flex-row mt-[160px]'>
                    <div className='float-left w-[350px] text-white ml-[35px]'>
                        <video src="videos/siam.mp4" class="video" type="video/mp4" width="380px"
                            poster="img/khaab.jpg" controls>
                        </video>
                        <div className="w-[300px]">
                            {/* <i class="fas fa-user-circle"></i> */}
                            <div className='pl-[40px] pt-[15px]'>
                                <h3>KHAAB || AKHIL || PARMISH VERMA || NEW PUNJABI SONG 2018</h3>
                                <span className='text-[grey]'>Crown Records</span>
                                <div className='text-[grey]'><span>490M views . 4 years ago</span></div>

                            </div>
                        </div>
                    </div>



                    <div className="float-left w-[350px] text-white ml-[50px]">
                        <video src="videos/aasiqui.mp4" class="video" type="video/mp4" width="380px" controls>
                        </video>
                        <div className="w-[300]">
                            {/* <i class="fas fa-user-circle"></i> */}
                            <div className='pl-[40px] pt-[15px]'>
                                <h3>Meri Aashiqui Song | Rochak Kohli Feat. Jubin Nautiyal</h3>
                                <span className='text-[grey]'>T - Series</span>
                                <div>
                                    <span className='text-[grey]'>312M views . 8 months ago</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="float-left w-[350px] text-white ml-[50px]">
                        <video src="videos/aasiqui.mp4" class="video" type="video/mp4" width="380px" controls>
                        </video>
                        <div className="w-[300]">
                            {/* <i class="fas fa-user-circle"></i> */}
                            <div className='pl-[40px] pt-[15px]'>
                                <h3>Meri Aashiqui Song - Rochak Kohli Feat. Jubin Nautiyal</h3>
                                <span className='text-[grey]'>T - Series</span>
                                <div>
                                    <span className='text-[grey]'>400M views . 1 years ago</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='mt-[35px]'>
                    <div className='float-left w-[350px] text-white ml-[35px]'>
                        <video src="videos/siam.mp4" class="video" type="video/mp4" width="380px"
                            poster="img/khaab.jpg" controls>
                        </video>
                        <div className="w-[300px]">
                            {/* <i class="fas fa-user-circle"></i> */}
                            <div className='pl-[40px] pt-[15px]'>
                                <h3>KHAAB || AKHIL || PARMISH VERMA || NEW PUNJABI SONG 2018</h3>
                                <span className='text-[grey]'>Crown Records</span>
                                <div className='text-[grey]'><span>490M views . 4 years ago</span></div>

                            </div>
                        </div>
                    </div>



                    <div className="float-left w-[350px] text-white ml-[50px]">
                        <video src="videos/aasiqui.mp4" class="video" type="video/mp4" width="380px" controls>
                        </video>
                        <div className="w-[300]">
                            {/* <i class="fas fa-user-circle"></i> */}
                            <div className='pl-[40px] pt-[15px]'>
                                <h3>Meri Aashiqui Song | Rochak Kohli Feat. Jubin Nautiyal</h3>
                                <span className='text-[grey]'>T - Series</span>
                                <div>
                                    <span className='text-[grey]'>312M views . 8 months ago</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="float-left w-[350px] text-white ml-[50px]">
                        <video src="videos/aasiqui.mp4" class="video" type="video/mp4" width="380px" controls>
                        </video>
                        <div className="w-[300]">
                            {/* <i class="fas fa-user-circle"></i> */}
                            <div className='pl-[40px] pt-[15px]'>
                                <h3>Meri Aashiqui Song - Rochak Kohli Feat. Jubin Nautiyal</h3>
                                <span className='text-[grey]'>T - Series</span>
                                <div>
                                    <span className='text-[grey]'>400M views . 1 years ago</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Videos;