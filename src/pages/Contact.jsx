import React from "react"
import { Link } from 'react-router-dom';

export default function Contact() {
    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [number, setNumber] = React.useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("https://sheetdb.io/api/v1/mao4adc5oumjx", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data: [
                    {
                        name: name,
                        email: email,
                        contact: number,
                    },
                ],
            }),
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
    }
    return (
        <div className="h-auto bg-[#023A2A]">
            <div className="px-8 pt-[30px]" >
                <img src=" ./images/form1.jpg" />
            </div>
            <div>
                <form
                    onSubmit={handleSubmit}
                    className=" flex flex-col   items-center justify-center gap-8 mx-[5px] mt-10"
                >
                    <input
                        type="text"
                        required
                        id="name"
                        placeholder="Name"
                        className="outline-none h-14 bg-white w-auto md:w-1/3 rounded-3xl px-4 border border-black text-black"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                    />
                    <input
                        type="text"
                        required
                        id="number"
                        placeholder="Phone Number"
                        className="outline-none h-14 bg-white w-auto md:w-1/3 rounded-3xl px-4 border border-black text-black"
                        pattern="[0-9]{10}"

                        onChange={(e) => setNumber(e.target.value)}
                        value={number}
                    />
                    <div className="my-7 px-7">
                        <p className="text-sm text-white text-center font-Helvet">Please fill in the following details. We will get back to you shortly.</p>
                    </div>
                    <button className="rounded-3xl mt-0 font-thin text-[16px] font-serif font-Helvet lg:text-[18px]  md:w-1/6 bg-white text-[#024f39] hover:text-white hover:bg-[#024f39] px-[22px] py-[8px] lg:px-[35px]">
                        Submit
                    </button>
                </form>
                <Link to="/*">
                    <div className="my-7 px-7 lg:hidden">
                        <p className="text-sm text-white text-center font-Helvet">Back</p>
                    </div>
                </Link>
            </div>
            <div className="flex flex-col justify-center items-center h-auto pt-[100px]">
                <div className="flex-1 w-36 my-2 rounded-xl bg-[#023A2A]">
                    <img className="pl-2 pt-2" src="./images/PLOG.png" alt="Logo" />
                </div>
            </div>
        </div>
    )
}