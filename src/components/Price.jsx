import React, { useState } from 'react';
import PopUp from './Popup';
export default function Price() {
  const [openPopup, setOpenPopup] = useState(false);
  const HandleRemovePopUp = () => setOpenPopup(false);
  return (
    <div id='5' className="bg-white py-[5%]">
      <div className=" text-center text-black px-4">
        <h1 className="text-4xl font-[Roadblock]"> PRICE LIST </h1>
        <p className="mt-2 text-md md:text-xl font-Helvet">
          Spring Elmas offers 2/3 BHK apartments with all modern features
        </p>
      </div>
      <div className="mx-[10%] grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-10 mt-6 ">
        <div className="border border-[#707070] w-[249px] h-[325px] rounded-xl basis-1/3 ">
          <h1 className="mt-4 px-[40px] text-black text-center font-extrabold text-2xl font-Helvet">
            2BHK + 2T
          </h1>
          <p className=" mt-[20px] px-[40px] text-black text-center text-xl font-Helvet">
            {" "}
            SIZE
          </p>
          <p className=" mt-[40px] px-[40px] text-black text-center text-xl font-Helvet">
            {" "}
            1182 Sq.Ft. PRICE
          </p>
          <p className=" mt-[42px] px-[40px] mb-[10px] text-black text-center text-xl font-Helvet">
            {" "}
            On Request
          </p>
          <div className="mt-6 flex bg-[#023A2A] w-auto py-2  px-10 rounded-b-xl cursor-pointer justify-center items-center font-Helvet">
            <p onClick={() => setOpenPopup(true)} className="text-white text-center font-bold">
              Download Brochure
            </p>
            <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} />
          </div>
        </div>

        <div className="border border-[#707070] w-[250px] h-[325px] rounded-xl basis-1/3">
          <h1 className="mt-4 px-[40px] text-black text-center font-extrabold text-2xl font-Helvet">
            3BHK + 2T
          </h1>
          <p className=" mt-[20px] px-[40px] text-black text-center text-xl font-Helvet">
            {" "}
            SIZE
          </p>
          <p className=" mt-[40px] px-[40px] text-black text-center text-xl font-Helvet">
            {" "}
            1357 Sq.Ft. PRICE
          </p>
          <p className=" mt-[42px] px-[40px] mb-[10px] text-black text-center text-xl font-Helvet">
            {" "}
            On Request
          </p>
          <div className="mt-6 flex bg-[#023A2A] w-auto py-2 px-10 rounded-b-xl cursor-pointer justify-center items-center">
            <p onClick={() => setOpenPopup(true)} className="text-white text-center font-bold font-Helvet">
              Download Brochure
            </p>
            <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} />
          </div>
        </div>

        <div className="border border-[#707070] w-[250px] h-[335px] rounded-xl basis-1/3">
          <h1 className="mt-4 px-[40px] text-black text-center font-extrabold text-2xl font-Helvet">
            3BHK + 2T + Study
          </h1>
          <p className=" mt-[20px] px-[40px] text-black text-center text-xl font-Helvet">
            {" "}
            SIZE
          </p>
          <p className=" mt-[40px] px-[40px] text-black text-center text-xl font-Helvet">
            {" "}
            1608 Sq.Ft. PRICE
          </p>
          <p className=" mt-[16px] px-[40px] mb-[10px] text-black text-center text-xl font-Helvet">
            {" "}
            On Request
          </p>
          <div className="mt-7 flex bg-[#023A2A] w-auto py-2 px-10 rounded-b-xl cursor-pointer justify-center items-center">
            <p onClick={() => setOpenPopup(true)} className="text-white text-center font-bold font-Helvet">
              Download Brochure
            </p>
            <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} />
          </div>
        </div>
      </div>
    </div>
  )
}
