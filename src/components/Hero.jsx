
import React, { useState, useEffect } from 'react';
import PopUp from './Popup';

export default function Hero() {
  const [openPopup, setOpenPopup] = useState(false);
  const HandleRemovePopUp = () => setOpenPopup(false);
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
}, []);
  return (
    <div
    id='1'
      className=" py-[16%] px-[5%] bg-black bg-cover"
      style={{ backgroundImage: 'url("./images/Group29.png")' }}
    >
      <div className="text-4xl font-[Roadblock]">
        <h1>PALM OLYMPIA</h1>
      </div>
      <div className="text-xl md:text-3xl font-Helvet pt-6">
        <h2>Introducing Premium 2BNHK & 3BHK Apartments</h2>
      </div>
      <div className="text-md md:text-xl font-Helvet pt-3">
        <p>UP RERA : UPRERAPRJ308567</p>
      </div>
      <div>
        
          <button
            onClick={() => setOpenPopup(true)}
            className="rounded-3xl mt-[4%] font-semibold text-sm md:text-[xl] font-Helvet lg:text-[18px] bg-[#023A2A] hover:text-[#024f39] hover:bg-white px-[22px] py-[8px] md:py-[10px] lg:px-[35px]">
            More Information
          </button>
          <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} />
        
      </div>
    </div>
  )
}
