import Amenities from "../components/Amenities"
import Compo2 from "../components/Compo2"
import Floorplan from "../components/Floorplan"
import Hero from "../components/Hero"
import Location from "../components/Location"
import Navbar from "../components/Navbar"
import Price from "../components/Price"
import ProjectHighlights from "../components/ProjectHighlights"
import Form1 from "../components/form1"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Compo2 />
      <Location />
      <Floorplan />
      <Form1 />
      <Price />
      <Amenities />
      <ProjectHighlights />
    </>
  )
}
