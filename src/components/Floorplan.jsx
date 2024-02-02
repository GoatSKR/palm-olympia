export default function Floorplan() {
  return (
    <div className="py-[5%]">
      <div className="text-4xl text-center">
        <h1> MASTER & FLOOR PLAN </h1>
      </div>
      <div className="mx-[8%] my-[8%] grid grid-cols-1 md:grid-cols-2 gap-9">
        <img className="w-auto h-auto" src="./images/plan1.jpg" />
        <img className="w-auto h-auto" src="./images/plan2.jpg" />
        <img className="w-auto h-auto" src="./images/plan3.jpg" />
        <img className="w-auto h-auto" src="./images/plan4.jpg" />
      </div>
    </div>
  )
}
