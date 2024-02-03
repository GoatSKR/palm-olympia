export default function Hero() {
  return (
    <div
      className=" py-[16%] px-[5%] bg-black bg-cover"
      style={{ backgroundImage: 'url("./images/Group29.png")' }}
    >
      <div className="text-4xl">
        <h1>PALM OLYMPIA</h1>
      </div>
      <div className="text-3xl">
        <h2>Introducing Premium 2BNHK & 3BHK Apartments</h2>
      </div>
      <div className="text-xl">
        <p>UP RERA : UPRERAPRJ308567</p>
      </div>
      <div>
        <button className="rounded-3xl mt-[4%] font-thin text-[16px] font-serif lg:text-[18px]   bg-[#023A2A] hover:text-[#024f39] hover:bg-white px-[22px] py-[8px] lg:px-[35px]">
          More Information
        </button>
      </div>
    </div>
  )
}
