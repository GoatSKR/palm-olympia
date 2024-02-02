export default function Location() {
  return (
    <>
      <div className="w-full bg-white  py-20 flex items-center justify-evenly">
        <section className="bg-[#023A2A] py-20 flex items-center justify-center flex-col gap-5 w-72 rounded-[48px]">
          <h3 className="text-base">AREA & UNITS</h3>
          <h2 className="font-bold text-xl">14 ACRES and 750</h2>
        </section>
        <section className="bg-[#023A2A] py-20 flex items-center justify-center flex-col gap-5 w-72 rounded-[48px]">
          <h3 className="text-base">TOWERS</h3>
          <h2 className="font-bold text-xl">11 TOWERS</h2>
        </section>
        <section className="bg-[#023A2A] py-20 flex items-center justify-center flex-col gap-5 w-72 rounded-[48px]">
          <h3 className="text-base">FLOOR</h3>
          <h2 className="font-bold text-xl">G + 30 FLOOR</h2>
        </section>
        <section className="bg-[#023A2A] py-20 flex items-center justify-center flex-col gap-5 w-72 rounded-[48px]">
          <h3 className="text-base">SIZE</h3>
          <h2 className="font-bold text-xl">1182 TO 1608 SQ.FT</h2>
        </section>
        <section className="bg-[#023A2A] py-20 flex items-center justify-center flex-col gap-5 w-72 rounded-[48px]">
          <h3 className="text-base">RERA NO.</h3>
          <h2 className="font-bold text-xl">UPRERAPRJ308567</h2>
        </section>
      </div>
      <div className="bg-[#E6ECEA] grid place-items-center h-auto w-full text-black px-20 py-20">
        <div className="flex items-center justify-center">
          <div className="flex-1">
            <p className="text-4xl uppercase">location advantage</p>
            <p className="text-xl py-2">
              Palm Olympia is a jewel situated at Greater Noida West. The
              location is ideal for rapid commute to important business and
              leisure hubs of Delhi NCR.
            </p>
            <div>
              <ul className="list-disc pl-5 py-2 text-xl">
                <li>
                  20 minutes drive from{" "}
                  <span className="font-bold">Akshardham Temple</span>
                </li>
                <li>
                  2 KM from{" "}
                  <span className="font-bold">upcoming Metro Station</span>
                </li>
                <li>
                  6 KM from <span className="font-bold">NH 24</span>
                </li>
                <li>
                  15 minutes drive from{" "}
                  <span className="font-bold">Noida City Centre</span>
                </li>
                <li>
                  10 KM from{" "}
                  <span className="font-bold">Ghaziabad Railway Station</span>
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
              <button className="rounded-3xl mt-[4%] font-thin text-[16px] font-serif lg:text-[18px] bg-[#024f39] text-white hover:text-[#024f39] hover:bg-white px-[22px] py-[8px] lg:px-[35px]">
                Check out on Map
              </button>
            </div>
          </div>

          <div className="flex-1">
            <img
              className=""
              src=" ../src/assets/images/Location.png"
              alt="hr Image"
            />
          </div>
        </div>
      </div>
    </>
  )
}
