export default function Price() {
  return (
    <div className="bg-white py-[6%]">
      <div className=" text-center text-black">
        <h1 className="text-4xl"> PRICE LIST </h1>
        <p className="mt-2 text-xl">
          Spring Elmas offers 2/3 BHK apartments with all modern features
        </p>
      </div>
      <div className="mx-[10%] grid grid-cols-3 justify-items-center gap-10 mt-6 ">
        <div className="border border-[#707070] w-[250px] h-[300px] rounded-xl basis-1/3">
          <h1 className="mt-4 px-[40px] text-black text-center font-extrabold text-2xl">
            2BHK + 2T
          </h1>
          <p className=" mt-[20px] px-[40px] text-black text-center text-xl">
            {" "}
            SIZE
          </p>
          <p className=" mt-[40px] px-[40px] text-black text-center text-xl">
            {" "}
            1182 Sq.Ft. PRICE
          </p>
          <p className=" mt-[42px] px-[40px] mb-[10px] text-black text-center text-xl">
            {" "}
            On Request
          </p>
          <div className="mt-6 flex bg-[#023A2A] w-auto py-2 px-10 rounded-b-xl cursor-pointer justify-center items-center">
            <p className="text-white text-center font-bold">
              Download Brochure
            </p>
          </div>
        </div>

        <div className="border border-[#707070] w-[250px] h-[300px] rounded-xl basis-1/3">
          <h1 className="mt-4 px-[40px] text-black text-center font-extrabold text-2xl">
            3BHK + 2T
          </h1>
          <p className=" mt-[20px] px-[40px] text-black text-center text-xl">
            {" "}
            SIZE
          </p>
          <p className=" mt-[40px] px-[40px] text-black text-center text-xl">
            {" "}
            1357 Sq.Ft. PRICE
          </p>
          <p className=" mt-[42px] px-[40px] mb-[10px] text-black text-center text-xl">
            {" "}
            On Request
          </p>
          <div className="mt-6 flex bg-[#023A2A] w-auto py-2 px-10 rounded-b-xl cursor-pointer justify-center items-center">
            <p className="text-white text-center font-bold">
              Download Brochure
            </p>
          </div>
        </div>

        <div className="border border-[#707070] w-[250px] h-[300px] rounded-xl basis-1/3">
          <h1 className="mt-4 px-[40px] text-black text-center font-extrabold text-2xl">
            3BHK + 2T + Study
          </h1>
          <p className=" mt-[20px] px-[40px] text-black text-center text-xl">
            {" "}
            SIZE
          </p>
          <p className=" mt-[40px] px-[40px] text-black text-center text-xl">
            {" "}
            1608 Sq.Ft. PRICE
          </p>
          <p className=" mt-[15px] px-[40px] mb-[10px] text-black text-center text-xl">
            {" "}
            On Request
          </p>
          <div className="mt-6 flex bg-[#023A2A] w-auto py-2 px-10 rounded-b-xl cursor-pointer justify-center items-center">
            <p className="text-white text-center font-bold">
              Download Brochure
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
