import React, { useState } from 'react';
import PopUp from './Popup';
export default function Compo2() {
  const [openPopup, setOpenPopup] = useState(false);
  const HandleRemovePopUp = () => setOpenPopup(false);
  return (
    <div id='2' className="bg-[#023A2A] h-auto grid place-items-center py-10 md:py-20">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="flex-1">
          <img className="px-20" src=" ./images/Group24.png" alt="hr Image" />
        </div>
        <div className="flex-1 px-5 md:px-20">
          <p className="text-4xl font-[Roadblock]">PALM OLYMPIA</p>
          <p className="mt-[6%] md:mt-[3%] text-xl font-Helvet">
            This project offers eco-friendly living, good connectivity, and a
            hassle-free lifestyle.
          </p>
          <p className="mt-10 text-sm font-Helvet">
            Sam Palm Olympia 2 Greater Noida West is new launch by Sam India
            Abhimanyu Housing. Palm Olympia Noida Extension offers apartments in
            varied budget range with a seamless connectivity to the prominent
            areas of Greater Noida. These units are a perfect combination of
            comfort and style, specifically designed to suit your requirements
            and conveniences.
          </p>
          <p className="mt-10 text-sm font-Helvet">
            The Builder system has created an ultra-premium giant living. The
            property presents the most elevated standard of living. It is spread
            over wide acres and has attractive looks and a high standard of
            living. The property is located in Greater Noida. The project has 80
            percent of its area dedicated to open spaces and green areas for
            sustainable and green living.
          </p>
          <div>
           
              <button  onClick={() => setOpenPopup(true)} className="rounded-3xl mt-10 font-semibold font-Helvet text-[16px] font-serif lg:text-[18px]   bg-white text-[#024f39] hover:text-white hover:bg-[#024f39] px-[22px] py-[8px] lg:px-[35px]">
                Read More
              </button>
              <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} />
          </div>
        </div>
      </div>
    </div>
  )
}
