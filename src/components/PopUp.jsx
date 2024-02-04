import React, { useState, useEffect } from "react";
import { FaTimes } from 'react-icons/fa'; 

const PopUp = ({ openPopUp, closePopUp }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");

    useEffect(() => {
        if (openPopUp) {
            document.body.style.overflow = "hidden"; 
        } else {
            document.body.style.overflow = ""; 
        }
    }, [openPopUp]);

    const handleLosePopUp = (e) => {
        if (e.target.id === "ModelContainer") {
            closePopUp();
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
            .then((data) => console.log(data));
    };

    return (
        <div
            id="ModelContainer"
            onClick={handleLosePopUp}
            className={`fixed inset-0 bg-black flex justify-center items-center bg-opacity-20 backdrop-blur-sm transition-opacity ${openPopUp ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
            style={{ zIndex: "1", transitionDuration: "0.4s" }}
        >
            <div
                className={`bg-[#023A2A] p-1 w-10/12 md:w-1/2 lg:1/3 border-e-emerald-600 pb-5 transition-transform ${openPopUp ? "transform translate-y-0" : "transform -translate-y-full"
                    }`}
                style={{ transitionDuration: "0.4s" }}
            >
                <div className="flex flex-row justify-end">
                    <button
                        className="text-white text-xl"
                        onClick={closePopUp}
                        aria-label="Close"
                    >
                        <FaTimes />
                    </button>
                </div>
                <div className="w-full px-4 pt-1 justify-center items-center">
                    <div>
                        <img src="./images/form1.jpg" alt="Form" />
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className=" flex flex-col p-2  items-center justify-center gap-4 mx-[5px] mt-10"
                    >
                        <input
                            type="text"
                            required
                            id="name"
                            placeholder="Name"
                            className="outline-none h-10 lg:h-14 text-[13px] md:text-[18px] bg-white w-4/5 md:w-2/3 lg:w-2/4 rounded-3xl px-4 border border-black text-black"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                        />
                        <input
                            type="text"
                            required
                            id="number"
                            placeholder="Phone Number"
                            className="outline-none h-10 lg:h-14 text-[13px] md:text-[18px] bg-white w-4/5 md:w-2/3 lg:w-2/4 rounded-3xl px-4 border border-black text-black"
                            pattern="[0-9]{10}"

                            onChange={(e) => setNumber(e.target.value)}
                            value={number}
                        />
                        <div className="my-4 px-7">
                            <p className="text-[13px] text-white text-center font-Helvet">Please fill in the following details. We will get back to you shortly.</p>
                        </div>
                        <button className="rounded-3xl mt-0 font-medium text-[13px] md:text-[18px] font-serif font-Helvet lg:text-[18px] w-auto  lg:w-1/4 bg-white text-[#024f39] hover:text-white hover:bg-[#024f39] px-[22px] py-[8px] lg:px-[35px]">
                            Submit
                        </button>
                    </form>
                    <div className="flex flex-col justify-center items-center h-auto pt-[50px]">
                        <div className="flex-1 w-36 my-2 rounded-xl bg-[#023A2A]">
                            <img className="pl-2 pt-2" src="./images/PLOG.png" alt="Logo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUp;
