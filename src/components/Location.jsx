import React, { useState, useEffect } from 'react';
import PopUp from './Popup';
export default function Location() {
  const [openPopup, setOpenPopup] = useState(false);
  const HandleRemovePopUp = () => setOpenPopup(false);
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="w-full bg-white  py-20 flex flex-col md:flex-row items-center gap-4 justify-evenly px-4">
        <section className="bg-[#023A2A] py-20 flex items-center justify-center flex-col gap-5 w-72 rounded-[48px]">
          <h3 className="text-base font-Helvet">AREA & UNITS</h3>
          <h2 className="font-bold text-xl font-Helvet">14 ACRES and 750</h2>
        </section>
        <section className="bg-[#023A2A] py-20 flex items-center justify-center flex-col gap-5 w-72 rounded-[48px]">
          <h3 className="text-base font-Helvet">TOWERS</h3>
          <h2 className="font-bold text-xl font-Helvet">11 TOWERS</h2>
        </section>
        <section className="bg-[#023A2A] py-20 flex items-center justify-center flex-col gap-5 w-72 rounded-[48px]">
          <h3 className="text-base font-Helvet">FLOOR</h3>
          <h2 className="font-bold text-xl font-Helvet">G + 30 FLOOR</h2>
        </section>
        <section className="bg-[#023A2A] py-20 flex items-center justify-center flex-col gap-5 w-72 rounded-[48px]">
          <h3 className="text-base font-Helvet">SIZE</h3>
          <h2 className="font-bold text-xl font-Helvet">1182 TO 1608 SQ.FT</h2>
        </section>
        <section className="bg-[#023A2A] py-20 flex items-center justify-center flex-col gap-5 w-72 rounded-[48px]">
          <h3 className="text-base font-Helvet">RERA NO.</h3>
          <h2 className="font-bold text-xl font-Helvet">UPRERAPRJ308567</h2>
        </section>
      </div>
      <div id='3' className="bg-[#E6ECEA] grid place-items-center h-auto w-full text-black px-5 md:px-20 py-20">
        <div className="flex flex-col md:flex-row items-center justify-center">
          <div className="flex-1">
            <p className="text-3xl md:text-4xl font-[Roadblock] uppercase">location advantage</p>
            <p className="text-md md:text-xl py-2 font-Helvet">
              Palm Olympia is a jewel situated at Greater Noida West. The
              location is ideal for rapid commute to important business and
              leisure hubs of Delhi NCR.
            </p>
            <div>
              <ul className="list-disc pl-5 py-2 text-sm md:text-xl font-Helvet">
                <li>
                  20 minutes drive from{" "}
                  <span className="font-bold font-Helvet">Akshardham Temple</span>
                </li>
                <li>
                  2 KM from{" "}
                  <span className="font-bold font-Helvet">upcoming Metro Station</span>
                </li>
                <li>
                  6 KM from <span className="font-bold font-Helvet">NH 24</span>
                </li>
                <li>
                  15 minutes drive from{" "}
                  <span className="font-bold font-Helvet">Noida City Centre</span>
                </li>
                <li>
                  10 KM from{" "}
                  <span className="font-bold font-Helvet">Ghaziabad Railway Station</span>
                </li>
                <li>
                  3 KM from{" "}
                  <span className="font-bold">
                    Delhi-Meerut Expressway (NH-9)
                  </span>
                </li>
                <li>
                  12 KM from <span className="font-bold">Sector 62 Noida</span>
                </li>
                <li>
                  16 KM from{" "}
                  <span className="font-bold">GIP & DLF Mall Sec-18 Noida</span>
                </li>
                <li>
                  45 minutes from <span className="font-bold">IGI Airport</span>
                </li>
              </ul>
            </div>
            <div>

              <button onClick={() => setOpenPopup(true)} className="rounded-3xl mt-[4%] font-semibold text-[16px] font-serif lg:text-[18px] bg-[#024f39] text-white hover:text-[#024f39] hover:bg-white px-[22px] py-[8px] lg:px-[35px]">
                Check out on Map
              </button>
              <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} />

            </div>
          </div>

          <div className="flex-1 pt-10 md:pt-0">
            <img className="" src=" ./images/Location.png" alt="hr Image" />
          </div>
        </div>
      </div>
    </>
  )
}
