import React from "react"

const ProjectHighlights = () => {
  return (
    <>
      <div className="bg-[#083C2E] text-white grid place-items-center h-auto w-full py-20">
        <div className="flex flex-col items-center justify-center lg:flex-row-reverse gap-10">
          <div className="px-5">
            <p className="text-3xl md:text-4xl uppercase py-4 font-[Roadblock]">KEY PROJECT HIGHLIGHTs</p>

            <div>
              <ul className="list-disc pl-5 py-2 text-sm md:text-lg space-y-6 font-Helvet">
                <li>Arrival Cour Palm</li>
                <li>Avenue With Linear Water Cascade</li>
                <li>Fragrance Garden With Linear Sitting</li>
                <li>Traffic Rotary With Accent Paving</li>
                <li>Elliptical Seating With Ornamental Trees</li>
                <li>Garden Pavilions In Yoga/Meditation Garden</li>
                <li>Metal Arbor With Bougainvilleas</li>
                <li>Club Water Feature</li>
              </ul>
            </div>
          </div>

          <div className="md:basis-1/2 px-[30px] md:px-[30px]">
            <img
              className="w-full max-w-full mx-auto"
              src="./images/KeyHighlights.png"
              alt="hr Image"
            />
          </div>

        </div>
      </div>


    </>
  )
}

export default ProjectHighlights
