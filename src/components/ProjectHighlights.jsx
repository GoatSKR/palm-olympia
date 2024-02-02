import React from "react"

const ProjectHighlights = () => {
  return (
    <>
      <div className="bg-[#083C2E] text-white grid place-items-center h-auto w-full py-20">
        <div className="flex items-center justify-between flex-row-reverse gap-20">
          <div className="pr-10">
            <p className="text-6xl uppercase py-4">KEY PROJECT HIGHLIGHTs</p>

            <div>
              <ul className="list-disc pl-5 py-2 text-xl space-y-6">
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

          <div className="flex-1">
            <img
              className=""
              src=" ../src/assets/images/brochure-final_page-0015@2x.png"
              alt="hr Image"
            />
          </div>
        </div>
      </div>

      <div className="bg-white grid place-items-center h-auto w-full text-black px-20 py-20">
        <div className="flex items-center justify-center">
          <div className="flex-1 px-24 space-y-6">
            <p className="text-3xl py-2">
              Experience the difference of living in a universe of your own
              devoted to your aspirations.
            </p>
            <p>
              Sam India is a renowned leader in the construction industry,
              widely recognized for its exceptional commitment to timely project
              delivery and unwavering dedication. The company’s passion for
              embracing cutting-edge technological advancements and innovative
              construction methodologies sets it apart from the competition.
              Currently, Sam India is undertaking the prestigious Housing for
              Members of Parliament in Delhi, as well as the depot for Mumbai
              Metro, among other endeavors. Its top notch quality ensures Sam
              India remains at the forefront of the ever-evolving construction
              industry, consistently delivering exceptional results.
            </p>
            <div>
              <button className="rounded-3xl mt-[4%] font-thin text-[16px] font-serif lg:text-[18px] bg-[#024f39] text-white hover:text-[#024f39] hover:bg-white px-[22px] py-[8px] lg:px-[35px]">
                Read More
              </button>
            </div>
          </div>

          <div className="flex-1">
            <video className="rounded-3xl" controls width="100%" height="auto">
              <source src="./src/assets/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectHighlights
