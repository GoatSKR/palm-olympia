import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import PopUp from './Popup';
export default function Experience() {
    const [openPopup, setOpenPopup] = useState(false);
    const HandleRemovePopUp = () => setOpenPopup(false);
    return (
        <div>
            <div className="bg-white grid place-items-center h-auto w-full text-black px-2 md:px-10 py-20">
                <div className="flex flex-col lg:flex-row items-center justify-center">
                    <div className="basis-1/2 px-4 md:px-32 space-y-6">
                        <p className="text-3xl md:text-4xl uppercase py-4 font-[Roadblock]">PROJECT HIGHLIGHTs</p>

                        <p className="text-md font-semibold font-Helvet">
                            Experience the difference of living in a universe of your own
                            devoted to your aspirations.
                        </p>
                        <p className="text-md font-Helvet">
                            Sam India is a renowned leader in the construction industry,
                            widely recognized for its exceptional commitment to timely project
                            delivery and unwavering dedication. The company’s passion for
                            embracing cutting-edge technological advancements and innovative
                            construction methodologies sets it apart from the competition.
                            Currently, Sam India is undertaking the prestigious Housing for
                            Members of Parliament in Delhi, as well as the depot for Mumbai
                            Metro, among other endeavors. Its top notch quality ensures Sam
                            India remains at the forefront of the ever-evolving construction
                            industry, consistently delivering exceptional results.
                        </p>
                        <div>

                            <button onClick={() => setOpenPopup(true)} className="rounded-3xl mt-[1%] md:mt-[4%] font-semibold text-[16px] font-serif lg:text-[18px] bg-[#024f39] text-white hover:text-[#024f39] hover:bg-white px-[22px] py-[8px] lg:px-[35px]">
                                Read More
                            </button>
                            <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} />
                        </div>
                    </div>

                    <div className=" basis-1/2 px-0 md:px-20"  >
                        <video id="myVideo" controls className="rounded-3xl mt-6" width="100%" height="auto">
                            <source src="./video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>

        </div>
    )
}