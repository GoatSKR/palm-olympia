import React from "react"

export default function Form1() {
  const containerStyle = {
    background: 'url("./images/KeyHighlights.png")', // Replace with your background image path
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    position: "relative",
    width: "100%",
    height: "100vh", // Set a specific height for your container
  }

  const overlayStyle = {
    backgroundColor: "rgba(8, 60, 46, 0.5)", // Replace with your desired background color
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "white", // Text color on top of the overlay
  }
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
    <div style={containerStyle}>
      <img
        src="./images/KeyHighlights.png"
        alt="Foreground Image"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />

      {/* Overlay with background color */}
      <div
        style={overlayStyle}
        className="flex flex-col items-center justify-center gap-6 mr-10"
      >
        <h1 className="text-4xl">Get In Touch</h1>
        <form
          onSubmit={() => handleSubmit}
          className=" flex items-center justify-center gap-8"
        >
          <input
            type="text"
            required
            id="name"
            placeholder="Name"
            className="outline-none h-10 bg-white w-96 rounded-md px-4 border border-black text-black"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <input
            type="text"
            required
            id="email"
            placeholder="Email"
            className="outline-none h-10 bg-white w-96 rounded-md px-4 border border-black text-black"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="text"
            required
            id="number"
            placeholder="Phone Number"
            className="outline-none h-10 bg-white w-96 rounded-md px-4 border border-black text-black"
            onChange={(e) => setNumber(e.target.value)}
            value={number}
          />
        </form>
        <h1 className="text-center text-8xl">PALM OLYMPIA</h1>
        <h2 className="text-center text-4xl">
          +91-9810-807-382 | info@arihantone.com
        </h2>
        <div className="h-28 w-48 rounded-xl bg-[#023A2A]">
          <img className="pl-2 pt-2 w-full h-full" src="./images/PLOG.png" />
        </div>
        <p className="text-2xl">
          This site is for information purpose only and should not be treated as
          the official information.
        </p>
        <p className="text-2xl">RERA No. UPRERAPRJ723911 | www.up-rera.in.</p>
        <p className="text-2xl">Sitemap | Privacy Policy</p>
      </div>
    </div>
  )
}
