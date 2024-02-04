
import React, { useState } from 'react';
import PopUp from './Popup';
export default function Floorplan() {
  const [openPopup, setOpenPopup] = useState(false);
  const HandleRemovePopUp = () => setOpenPopup(false);
  return (
    <div id='4' className="py-[5%]">
      <div className="text-4xl text-center font-[Roadblock]">
        <h1> MASTER & FLOOR PLAN </h1>
      </div>
      <div className="mx-[8%] my-[8%] grid grid-cols-1 md:grid-cols-2 gap-9">
        
          <img onClick={() => setOpenPopup(true)} className="w-auto h-auto" src="./images/plan1.jpg" />
       
    
          <img onClick={() => setOpenPopup(true)} className="w-auto h-auto" src="./images/plan2.jpg" />
      
    
          <img onClick={() => setOpenPopup(true)} className="w-auto h-auto" src="./images/plan3.jpg" />
       
 
          <img onClick={() => setOpenPopup(true)} className="w-auto h-auto" src="./images/plan4.jpg" />
       

      </div>
      <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} />
    </div>
  )
}
