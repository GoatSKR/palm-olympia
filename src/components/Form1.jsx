export default function Form1() {
    return (
        <div className="bg-[#023A2A] py-[5%]">

            <div>
                <img className="w-auto h-auto px-[8%]" src="../src/assets/images/form1.jpg" />
            </div>
            <div className="mt-[8%] flex flex-col place-items-center">
                <input className="bg-white w-auto md:w-[40%] rounded-3xl pl-6 text-black text-left py-4" type="text" placeholder="Name" />
                <input className="mt-3 bg-white w-auto md:w-[40%] rounded-3xl pl-6 text-black text-left py-4" type="text" placeholder="Mobile Number" />
            </div>
            <div className="mt-6 flex justify-center">
                <div className="text-white text-lg w-[70%] lg:w-[20%]">
                    <p className="font-light text-center">Please fill in the following details. We will get back to you shortly.</p>

                </div>
            </div>
            <div className="mt-6 flex justify-center">
                <div>
                    <button className="px-[70px] rounded-3xl mt-[4%] font-thin text-[16px] font-serif lg:text-[18px]   bg-white text-[#024f39] hover:text-white hover:bg-[#024f39] py-[14px] ">
                        Submit
                    </button>
                </div>
            </div>
        </div>
    )
}